import requests
import telebot
import random
import time
from bs4 import BeautifulSoup

bot = telebot.TeleBot('1133552059:AAHSxIyrK9gWPN0sNlLjD6sy-3npj_QDZ0A')
me = 668618297
url = "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0"


response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

def generate_links():
	# Get all the links
	allLinks = soup.find(id="content").find_all("a")
	random.shuffle(allLinks)
	# linkToScrape = 0

	for link in allLinks:
		# We are only interested in other wiki articles
		if link['href'].find("/wiki/") == -1:
			continue
		link = link['href']
		link = [x for x in link.split("/wiki/")]

		# Use this link to scrape
		return "".join(link[1])
counter = 0
while True:
	title = generate_links()
	print(title.string)
	bot.send_message(me, f"<b><a href='https://ru.wikipedia.org/wiki/{title}'>{title}</a></b>", parse_mode='HTML')
	time.sleep(10)
	counter += 1
	if counter > 5:
		break



