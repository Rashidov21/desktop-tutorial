import telebot
import requests
from bs4 import BeautifulSoup

bot = telebot.TeleBot("1133552059:AAGZabDmcIcgpukOOo5ItHvYihEvuIMjiDE")
headers = {"User-Agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'}
url = "https://coderoad.ru/"
page = requests.get(url=url, headers=headers, verify=False)
soup = BeautifulSoup(page.content , 'html.parser')
card = soup.find('div', class_="card-body")
links = card.findAll("a", class_="nav-link")

for i in links:
    print(i.text)
# @bot.message_handler(commands=['start'])
# def start_command(message):
#     for i in images:
#         bot.send_message(message.chat.id, i["src"])
#
# bot.polling()