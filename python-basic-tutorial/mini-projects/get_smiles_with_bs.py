import requests
import wget
from bs4 import BeautifulSoup as bs

url = "https://www.flaticon.com/search?word=emotion&shape=lineal-color&order_by=4"
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
}

page = requests.get(url, headers=headers)
print(page.status_code)
soup = bs(page.content, "html.parser")

icons = soup.find_all("div", class_="icon--holder")
for i in range(len(icons)-1):
    wget.download(icons[i].find("img")["data-src"])
