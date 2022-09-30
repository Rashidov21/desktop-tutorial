# pip install bs4
# pip install requests
# pip install telepot
import requests
import random
import telepot
from bs4 import BeautifulSoup as bs
from .config import TOKEN, me

bot = telepot.Bot(TOKEN)


url = "https://pyblog.uz"

header = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}

page = requests.get(url=url, headers=header)

soup = bs(page.content, "html.parser")

top_posts = soup.find("span", id="result_list")

for a in top_posts.findAll("a"):
    print(a.text)
    print(url+a["href"])

    # panels = soup.findAll("article", class_='panel')

    # for panel in panels:
    #     if panel.find("span", id="result_list"):
    #         print("yes")
    #     else:
    #         print("No")
