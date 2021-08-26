from aiogram import Bot, types
from aiogram.dispatcher import Dispatcher
from aiogram.utils import executor
from aiogram.utils.markdown import text, hbold, italic
from aiogram.types import ReplyKeyboardRemove,ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton
from config import TOKEN, create_DB_cursor,conn
import time
from emoji import emojize

start_info = text(
    text('Assalom alaykum! 👋\n'),
    text(hbold("ROBOCODE IT ACADEMY tomonidan CSS ni biladigan o'quvchilar uchun BATTLE uyishtiramiz, sovrinlari bilan !\n")),
    text("Bu ",hbold(italic("BOT"))," ga shaxsiy ma'lumotlaringizni yuboring, va ro'yhatdan o'ting.Ro'yhatdan muvaffaqiyatli o'tsangiz ",hbold(italic("BOT"))," siz uchun uid (unical ID) beradi.\n"),
    text('Ushbu ID orqali siz ',hbold('CSS Battle challenge'),' da ishtirok etishingiz mumkin bo\'ladi.\n'),
    text("Battle bo'lib o'tadigan sanan va shartlar sizga shaxsiy ma'lumotlaringiz to'g'ri ekani tekshirilgandan so'ng yuboriladi.\n"),
    text("Quyidagi ma'lumotlaringizni menga yuboring!\n"),
    text("Qatnashish istagida bo'lsangiz ",text(hbold("YUBORISH"))," tugmasiga bosing.\n"),

)


bot = Bot(token=TOKEN)
dp = Dispatcher(bot)

# button_hi = KeyboardButton('Boshladik! 👋')
# hi = ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True).add(button_hi)

start_btn = InlineKeyboardButton('\start', callback_data='send')
name_btn = InlineKeyboardButton('Ism', callback_data='name')
surname_btn = InlineKeyboardButton('Familya', callback_data='surname')
age_btn = InlineKeyboardButton('Yosh', callback_data='age')

start_key = InlineKeyboardMarkup().add(start_btn)
info_keys = InlineKeyboardMarkup().add(name_btn,surname_btn,age_btn)
# Location and Number request
markup_request = ReplyKeyboardMarkup(resize_keyboard=True).add(
    KeyboardButton('Telefon raqamni yuborish ☎️', request_contact=True)
)
# .add(
#     KeyboardButton('Manzilni yuborish 🗺️', request_location=True)
# )


@dp.message_handler(commands=['start'])
async def process_start_command(message: types.Message):
    await message.reply(start_info, reply_markup=start_key, parse_mode="HTML")

@dp.message_handler(commands=['help'])
async def process_help_command(message: types.Message):
    msg = text(hbold('Men quyidagi buyruqlarni bajara olaman!'),
               '1.Boshlash /start', '2.Statusingizni tekshiring /check', '3.Yordam /help', sep='\n')
    await message.reply(msg, parse_mode="HTML")

@dp.message_handler(commands=['check'])
async def check_user_status(message: types.Message):
    user_id = message.chat.id
    cursor = create_DB_cursor()
    for row in cursor.execute("SELECT rowid, * FROM users ORDER BY user_id"):
        if user_id == int(row[1]):
            await bot.send_message(message.chat.id,
                "Siz avvaldan roýhatdan o'tgansiz !\nIltimos Natijalaringizni kuting.",
                parse_mode="HTML",reply_markup=start_key)
            break
        else:
            await bot.send_message(message.chat.id, "Iltimos \start ni bosing.",parse_mode="HTML",reply_markup=start_key)



# @dp.message_handler()
# async def echo_message(msg: types.Message):
#     await bot.send_message(msg.from_user.id, "Yozib ovora bo'lmang baribir yozgan narsangizni o'zingizga jo'nataman!")



@dp.callback_query_handler(lambda c: c.data)
async def process_callback_buttons(callback_query: types.CallbackQuery):
    if callback_query.data == 'send':
        name = callback_query.message.chat.first_name
        surname = callback_query.message.chat.last_name
        username = callback_query.message.chat.username
        bio = callback_query.message.chat.bio if callback_query.message.chat.bio else emojize(
            "Topilmadi :thinking_face:")
        await bot.answer_callback_query(callback_query.id)

        await bot.send_message(callback_query.from_user.id, text("Iltimos biroz kuting... \n \U0001F642"))
        time.sleep(2)
        await bot.send_message(callback_query.from_user.id, text("Siz haqingizda ma'lumot to'playapman... \n \U0001F600",))
        time.sleep(4)
        await bot.send_message(callback_query.from_user.id, text("Yana ozgina sabr qilamiz... \n \U0001F92B	"))
        time.sleep(3)
        await bot.send_message(callback_query.from_user.id, text("Deyarli tugatdim... \n \U0001F60C"))
        time.sleep(2)
        await bot.send_message(callback_query.from_user.id, text("Tugadi... \n \U0001F973"))
        time.sleep(1)
        await bot.send_message(callback_query.from_user.id,
            text(
                hbold("Siznig ma'lumotlaringiz... \n"),
                text('\nUsername : ', hbold(username)),
                text('\nIsm : ', hbold(name)),
                text('\nFamilya : ', hbold(surname)),
                text('\nBio : ', hbold(bio)),
            ),parse_mode="HTML"
            )
        time.sleep(1)
        await bot.send_message(callback_query.from_user.id, text("Oxirgi ish qoldi... \n \U0001F973 \n \
         Menga Telefon raqamingizni yuboring."), reply_markup=markup_request)
        time.sleep(1)
        phone = ""
        # photo = callback_query.message.chat.photo if callback_query.message.chat.photo else emojize("Rasmga ruxsat yo'q ekanku :thinking_face:")

        await bot.send_message(callback_query.from_user.id, text(""))

@dp.message_handler(content_types=['contact'])
async def contact(message):
    if message.contact is not None:
        keyboard2 = types.ReplyKeyboardRemove()
        await bot.send_message(message.chat.id, 'Raqamingizni qabul qildim !', reply_markup=keyboard2)
        username = message.from_user.username
        first_name = message.from_user.first_name
        last_name = message.from_user.last_name
        bio = message.from_user.full_name

        global phonenumber
        phonenumber = str(message.contact.phone_number)
        user_id = str(message.contact.user_id)
        cursor = create_DB_cursor()
        cursor.execute(f"""
                  INSERT INTO users
                  VALUES ('{user_id}', '{username}','{first_name}','{last_name}', '{bio}', {phonenumber})""")

        if cursor:
            conn.commit()
        time.sleep(1)
        await bot.send_message(message.chat.id, 'Natijani telefon orqali yetkazamiz !')


if __name__ == '__main__':
    executor.start_polling(dp)