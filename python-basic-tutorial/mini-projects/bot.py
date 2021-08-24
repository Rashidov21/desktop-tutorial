from telebot import types
import telebot

bot = telebot.TeleBot('1720356473:AAHYnusESxOqJc2PRXSlsNUkr8slIh6Vs-8',parse_mode=None)
keyboard = types.InlineKeyboardMarkup(row_width = 3)
nott = types.InlineKeyboardButton(text="no_emoji", callback_data='no')
bad = types.InlineKeyboardButton(text="bad_emoji", callback_data='bad')
yes = types.InlineKeyboardButton(text="yes_emoji", callback_data='yes')
keyboard.add(nott, bad, yes)

@bot.message_handler(commands=['start'])
def send_welcome(message):
	bot.send_message(message.id,"Aloha",reply_markup=keyboard)

@bot.message_handler(func=lambda m: True)
def echo_all(message):
	bot.reply_to(message, message.text)

bot.polling()