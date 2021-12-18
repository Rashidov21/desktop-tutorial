# pip install bs4
# pip install requests
import requests
from bs4 import BeautifulSoup

url = "https://yandex.uz/"
page = requests.get(url)
# print(page.status_code) # agar 200 kelsa demak OK
# print(type(page.text)) # string

soup = BeautifulSoup(page.text , "html.parser")

def courses():
    data = soup.findAll("span", class_="inline-stocks__value_inner")
    money = []
    for i in data:
        money.append(i.text)
    # print(money) # list
    print(f"USD : {money[0]}")
    print(f"EURO : {money[1]}")
    print(f"RUB : {money[2]}")

def weather():
    city = soup.find("span", class_="geolink__reg").text
    temp_now = soup.find("div", class_="weather__temp").text
    # other_temps_block = soup.find("div", class_="weather__forecast")
    # day = other_temps_block.find("span")
    print(f"{city}da hozir havo harorati {temp_now} . ")
    print()

    # data = soup.findAll("", class_="")
user = int(input("Tanlang \n 1 - valyuta kursi \n 2 - Ob havo ma'lumoti \n>>>"))
if user == 1:
    courses()
elif user == 2:
    weather()
else:
    print( "Bunday buyruq yoq.")


# allLinks = soup.findAll("a")
# for i in allLinks:
#     print(i["href"]) # faqat link href lari