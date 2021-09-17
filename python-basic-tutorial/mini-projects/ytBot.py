import random

import telebot
from telebot import types
API_TOKEN = '1208478917:AAFo5BAmpu7ipIEEEX8XuEHtaLvsr6YK3wU'

bot = telebot.TeleBot(API_TOKEN)

keyboard = types.InlineKeyboardMarkup()
key = types.InlineKeyboardButton(text='Random son', callback_data='getnum')
keyboard.add(key)

# Handle '/start' and '/help'
@bot.message_handler(commands=['help', 'start'])
def send_welcome(message):
    bot.reply_to(message, """\
Assalomu alayklum ! Men choy tashidigan Botman !.
Menga sizga tasodifi 0 dan 100 bo'lgan sonni yubora olaman!\
""", reply_markup=keyboard)

@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
    if call.data == "getnum":
        r = random.randint(0,100)

        bot.send_message(call.message.chat.id, f"Siz uchun son : {r}")
# Handle all other messages with content_type 'text' (content_types defaults to ['text'])
@bot.message_handler(func=lambda message: True)
def echo_message(message):
    bot.reply_to(message, message.text)


bot.polling()

# import telebot
# import requests
# import schedule
# import random
# import time
# from bs4 import BeautifulSoup
#
#
# bot = telebot.TeleBot("1208478917:AAFo5BAmpu7ipIEEEX8XuEHtaLvsr6YK3wU")
#
# def getHadith():
#     headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'}
#     url = "https://islom.ziyouz.com/hadis/islomning-o-zagi-bo-lgan-hadislar"
#     page = requests.get(url=url, headers=headers)
#     soup = BeautifulSoup(page.content, 'html.parser')
#     card = soup.find('div', class_="item-page")
#     links = card.findAll("p")
#     hadith = []
#     for i in links:
#         hadith.append(i.text)
#
#     if len(hadith) > 5:
#         bot.send_message([1959575819,668618297], random.choice(hadith))
# schedule.every(20).seconds.do(getHadith)
# while True:
#     schedule.run_pending()
#     time.sleep(1)
#
# # @bot.message_handler(commands=['start'])
# # def start_command(message):
# #     bot.send_message(message.chat.id, "Hello")
# #
# # bot.polling()