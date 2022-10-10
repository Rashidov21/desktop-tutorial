# pip install -U aiogram
import random
from aiogram import Bot, Dispatcher, executor, types
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from config import TOKEN

btn = InlineKeyboardButton('Kuldirish ', callback_data='laugh')
laugh_btn = InlineKeyboardMarkup().add(btn)


bot = Bot(token=TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=['start', 'help'])
async def send_welcome(message: types.Message):
    await message.reply("Salom! , Bu bot faqat kuladi ! ", reply_markup=laugh_btn)


@dp.callback_query_handler(lambda c: c.data)
async def laugh_send(callback_query: types.CallbackQuery):

    await bot.send_voice(callback_query.from_user.id,
                         voice=open(
                             f"laughs/{random.randint(1, 6)}.wav", "rb"))


@dp.message_handler()
async def echo(message: types.Message):
    await message.answer(message.text)


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
