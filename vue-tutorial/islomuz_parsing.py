# from bs4 import BeautifulSoup
# import  requests
#
# url = 'https://islom.uz/'
# page = requests.get(url)
# print(page.status_code)
# soup = BeautifulSoup(page.text, "html.parser")
# time = soup.findAll('div', class_='date_time')
arr = [{'name':'john'},{'name':'doe'},{'name':'michael'},{'name':'jack'}]
for i in arr:
    for x in i.values():
        print(x)