from bs4 import BeautifulSoup
import  requests

url = 'https://islom.uz/'
page = requests.get(url)
print(page.status_code)
soup = BeautifulSoup(page.text, "html.parser")
time = soup.findAll('div', class_='date_time')
print(time)