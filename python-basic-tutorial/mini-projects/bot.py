from telebot import types
import telebot
import sqlite3

conn = sqlite3.connect("bot_users.db", check_same_thread=False)  # или :memory: чтобы сохранить в RAM

def create_DB_cursor():
	cursor = conn.cursor()
	return cursor

# cursor.execute("""CREATE TABLE users
#                   (user_id text, username text, first_name text,
#                    last_name text, bio text)
#                """)

bot = telebot.TeleBot('1720356473:AAHYnusESxOqJc2PRXSlsNUkr8slIh6Vs-8',parse_mode=None)
keyboard = types.InlineKeyboardMarkup(row_width = 3)
nott = types.InlineKeyboardButton(text="\U0001f600", callback_data='bad')
bad = types.InlineKeyboardButton(text="\U0001F606", callback_data='normal')
yes = types.InlineKeyboardButton(text="\U0001F923", callback_data='great')
keyboard.add(nott, bad, yes)

@bot.message_handler(commands=['start'])
def send_welcome(message):
	user_id = message.chat.id
	username = message.chat.username
	first_name = message.chat.first_name
	last_name = message.chat.last_name
	bio = message.chat.bio
	cursor = create_DB_cursor()
	cursor.execute(f"""INSERT INTO users
	                  VALUES ('{user_id}', '{username}',
	                  '{first_name}','{last_name}', '{bio}')"""
				   )
	conn.commit()
	print('yana bittasi ilindi')
	bot.send_message(user_id , f"{username} siz uchun dasturlash so'zi qanday kayfiyat hosil qiladi ? Iltimos tanlang !", reply_markup=keyboard)

@bot.callback_query_handler(func=lambda call: True)
def callback_inline(call):
	if call.data == 'bad':
		bot.send_message(call.message.chat.id,"Kompyuterni bilmasangiz dasturchi bo'la olmaysiz !\nKompyuterni yaxshi bilgan odam esa dasturchi degani emas.\U0001f600")
	if call.data == "normal":
		bot.send_message(call.message.chat.id,"Python bu dasturlash tillari orasida o'rganishga eng oson til ! Lekin bu siz uni PUBG o'ynashni o'rganganiz kabi o'rganasiz degani emas.. Hamma katta yutuqlar ostida katta qunt va mehnat yotadi.\U0001F606")
	if call.data == 'great':
		bot.send_message(call.message.chat.id,"Agar sizga dasturlashni o'rganish osonga o'xshasa siz hech qanday dasturlashni o'rganmayapsiz !Siz shunchaki ko'chirib yozyapsiz kodlar \U0001F923")

@bot.message_handler(func=lambda m: True)
def echo_all(message):
	bot.reply_to(message, message.text)


bot.polling()