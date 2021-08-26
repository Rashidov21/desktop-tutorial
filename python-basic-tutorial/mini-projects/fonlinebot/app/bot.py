import logging
from aiogram import Bot, types
from aiogram.contrib.middlewares.logging import LoggingMiddleware
from aiogram.dispatcher import Dispatcher

from config import TOKEN, YEAR, MINUTE
import app.service as s
from app.dialogs import msg
from database import database as db, cache

# стандартный код создания бота
bot = Bot(token=TOKEN)
dp = Dispatcher(bot)
dp.middleware.setup(LoggingMiddleware())


@dp.message_handler(commands=['start'])
async def start_handler(message: types.Message):
    """Обработка команды start. Вывод текста и меню"""
    # проверка, есть ли пользователь в базе
    user_league_ids = await s.get_league_ids(message.from_user.id)
    if not user_league_ids:
        await message.answer(msg.start_new_user)
        #  добавление id сообщения настроек
        cache.setex(f"last_msg_{message.from_user.id}", YEAR, message.message_id+2)
        await set_or_update_config(user_id=message.from_user.id)
    else:
        await message.answer(msg.start_current_user,
                             reply_markup=s.MAIN_KB)


@dp.message_handler(commands=['help'])
async def help_handler(message: types.Message):
    """Обработка команды help. Вывод текста и меню"""
    await message.answer(msg.help, reply_markup=s.MAIN_KB)


@dp.callback_query_handler(lambda c: c.data == 'main_window')
async def show_main_window(callback_query: types.CallbackQuery):
    """Главный экран"""
    await callback_query.answer()
    await bot.send_message(callback_query.from_user.id, msg.main, reply_markup=s.MAIN_KB)


@dp.message_handler(lambda message: message.text == msg.btn_online)
@dp.message_handler(commands=['online'])
async def get_results(message: types.Message):
    """Обработка команды online и кнопки Онлайн.
    Запрос матчей. Вывод результатов"""
    user_leagues = await s.get_league_ids(message.from_user.id)
    cache.setex(f"last_msg_{message.from_user.id}", YEAR, message.message_id+1)
    if not user_leagues:
        await set_or_update_config(user_id=message.from_user.id)
    else:
        answer = await s.generate_results_answer(user_leagues)
        cache.setex(f"last_update_{message.from_user.id}", MINUTE, "Updated")
        await message.answer(answer,
                             reply_markup=s.results_kb(user_leagues),
                             parse_mode=types.ParseMode.MARKDOWN)


@dp.callback_query_handler(lambda c: c.data.startswith('update_results'))
async def update_results(callback_query: types.CallbackQuery):
    """Обновление сообщения результатов"""
    if cache.get(f"last_update_{callback_query.from_user.id}") is None:
        user_leagues = callback_query.data.split("#")[1:]
        answer = await s.generate_results_answer(user_leagues)
        if answer == msg.limit_control:
            return await callback_query.answer(answer, show_alert=True)
        else:
            cache.setex(f"last_update_{callback_query.from_user.id}", MINUTE, "Updated")
            await bot.edit_message_text(
                answer,
                callback_query.from_user.id,
                message_id=int(cache.get(f"last_msg_{callback_query.from_user.id}")),
                parse_mode=types.ParseMode.MARKDOWN,
                reply_markup=s.results_kb(user_leagues)
            )
    # игнорируем обновление, если прошло меньше минуты
    await callback_query.answer(msg.cb_updated)


@dp.message_handler(lambda message: message.text == msg.btn_config)
async def get_config(message: types.Message):
    """Обработка кнопки Настройки.
    Проверка выбора лиг. Вывод меню изменений настроек"""
    user_league_ids = await s.get_league_ids(message.from_user.id)
    if user_league_ids:
        cache.setex(f"last_msg_{message.from_user.id}", YEAR, message.message_id+2)
        leagues = await s.get_league_names(user_league_ids)
        await message.answer(msg.config.format(leagues=leagues),
                             reply_markup=s.CONFIG_KB)
    else:
        cache.setex(f"last_msg_{message.from_user.id}", YEAR, message.message_id+1)
        await set_or_update_config(user_id=message.from_user.id)


@dp.callback_query_handler(lambda c: c.data.startswith('edit_config'))
async def set_or_update_config(callback_query: types.CallbackQuery = None,
                               user_id=None, offset=""):
    """Получение или обновление выбранных лиг"""
    # если пришел callback, получим данные
    if callback_query is not None:
        user_id = callback_query.from_user.id
        offset = callback_query.data.split("#")[-1]

    league_ids = await s.get_league_ids(user_id)
    leagues = await s.get_league_names(league_ids)

    # если это первый вызов функции, отправим сообщение
    # если нет, отредактируем сообщение и клавиатуру
    if offset == "":
        await bot.send_message(
            user_id,
            msg.set_leagues.format(leagues=leagues),
            reply_markup=s.leagues_kb(league_ids)
        )
    else:
        msg_id = cache.get(f"last_msg_{user_id}")
        await bot.edit_message_text(
            msg.set_leagues.format(leagues=leagues),
            user_id,
            message_id=msg_id
        )
        await bot.edit_message_reply_markup(
            user_id,
            message_id=msg_id,
            reply_markup=s.leagues_kb(league_ids, int(offset))
        )


@dp.callback_query_handler(lambda c: c.data[:6] in ['del_le', 'add_le'])
async def update_leagues_info(callback_query: types.CallbackQuery):
    """Добавление/удаление лиги из кеша, обновление сообщения"""
    offset = callback_query.data.split("#")[-2]
    s.update_leagues(callback_query.from_user.id, callback_query.data)
    await set_or_update_config(user_id=callback_query.from_user.id, offset=offset)
    await callback_query.answer()


@dp.callback_query_handler(lambda c: c.data == 'save_config')
async def save_config(callback_query: types.CallbackQuery):
    """Сохранение пользователя в базу данных"""
    leagues_list = await s.get_league_ids(callback_query.from_user.id)
    if len(leagues_list) > 3:
        # не сохраняем, если превышен лимит лиг
        await callback_query.answer(msg.cb_limit, show_alert=True)
    elif leagues_list:
        await db.insert_or_update_users(
            callback_query.from_user.id,
            ",".join(leagues_list)
        )
        await callback_query.answer()
        await bot.send_message(
            callback_query.from_user.id,
            msg.db_saved,
            reply_markup=s.MAIN_KB
        )
    else:
        # не сохраняем если список пустой
        await callback_query.answer(msg.cb_not_saved)


@dp.callback_query_handler(lambda c: c.data == 'delete_config')
async def delete_config(callback_query: types.CallbackQuery):
    """Удаление пользователя из базы данных"""
    await db.delete_users(callback_query.from_user.id)
    cache.delete(f"u{callback_query.from_user.id}")
    await callback_query.answer()
    cache.incr(f"last_msg_{callback_query.from_user.id}")
    await bot.send_message(callback_query.from_user.id,
                           msg.data_delete,
                           reply_markup=s.MAIN_KB)


@dp.message_handler()
async def unknown_message(message: types.Message):
    """Ответ на любое неожидаемое сообщение"""
    await message.answer(msg.unknown_text, reply_markup=s.MAIN_KB)


async def on_shutdown(dp):
    logging.warning('Shutting down..')
    # закрытие соединения с БД
    db._conn.close()
    logging.warning("DB Connection closed")

