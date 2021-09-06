import requests
import json
url = "https://www.omdbapi.com/"
#
# params = {"i":"tt4154796"}
apikey = 'd957b255'
query = 'i=tt6334354'


response = requests.get(f"{url}?{query}&apikey={apikey}")
data = json.loads(response.text)
title = data['Title']
pk = data['imdbID']
print(title,pk)

# *args = ()
# **kwargs = {}
# def main(a,b,c):
#     print(a * b / c)
# main(10,30,20)

# def main(**kwargs):
#     print(type(kwargs))
#     for i in kwargs:
#         print(type(i))
#         print(i)
#
# main(key1=20,key2=30,key3=40)
# from faker import Faker
# fake = Faker()
# peoples = []
# for i in range(100):
#     name = fake.name()
#     peoples.append(name)
# with open('names.txt','a') as names:
#     for name in peoples:
#         names.write(f"{name}\n")
# peoples = []
# with open('names.txt', 'r') as names:
#     for i in range(10):
#         one_person = names.read()
#         peoples.append(one_person.split('\n'))

# match = []
# for i in peoples[0]:
#     i = i.lower()
#     for j in peoples[0]:
#         i = j.lower()
#         print(i.split(' ')[0])
#         # if i.split(' ')[0] == j.split(' ')[0]:
#         #     match.append(j)
# print(match)














# 2. Foydalanuvchi bergan sonlar oralig’idagi barcha sonlarni
# listga yozuvchi kod yozing:
# masal 5  bilan 10 orasidagi sonlar > nums = [6,7,8,9,10]
# txt = ['txt', 'pdf', 'docx']
# filename = input('File >>').split('.')
# if filename[1] in txt:
#     print('TEXT file')
# else:
#     print('Not TEXT')

# x = lambda i:[i for i in range(i) if i % 2 == 0]
# ls = [x(10)]
# print(ls)
# def getNums(big,small,count):
#     import random
#     your_nums = []
#     nums = [x for x in range(big,small)]
#     for i in range(count):
#         n = random.choice(nums)
#         your_nums.append(n)

#     print(your_nums)


# def getNums2(big,small,count):
#     import random
#     return list(random.simple( list(range(small,big), count)))


# a = int(input('Big'))
# b = int(input('Small'))
# c = int(input('Count'))
# getNums(a,b,c)











# import requests
# import telepot
# TOKEN = '1208478917:AAFsMkF5zPBChuDySpcI3GEhz5Ql-tlMKLw'
# bot = telepot.Bot(TOKEN)
# me = 668618297
# city_id='1514588' #andijan
# #city_id='1512569' #toshkent
# appid='9f8b170f9d385dc077c20044cca1e123'
# res = requests.get("http://api.openweathermap.org/data/2.5/weather", params={'id': city_id, 'units': 'metric', 'lang': 'en', 'APPID': appid})
# data = res.json()
# bot.sendMessage(me,f"City : {data['name']} \nWeather : {data['weather'][0]['description']} \nTemp {data['main']['temp']}")
# print('City : ',data['name'])
# print('Weather :',data['weather'][0]['description'])
# print('Temp :',data['main']['temp'])
# print('Pressure :',data['main']['pressure'])
# print('Humidity :',data['main']['humidity'])


# from faker import Faker

# fake = Faker()
# ls = []
# for i  in range(10):
# 	name = fake.name()
# 	ls.append(name)
# 	with open('names.txt', 'w') as file:
# 		file.write(' \n'.join(ls))

# def bubble_sort(nums):

#     swapped = True
#     while swapped:
#         swapped = False
#         for i in range(len(nums) - 1):
#             if nums[i] > nums[i + 1]:
#                 # change elems
#                 nums[i], nums[i + 1] = nums[i + 1], nums[i]
#                 # flag True
#                 swapped = True


# random_list_of_nums = [5, 2, 1, 8, 4]
# bubble_sort(random_list_of_nums)
# print(random_list_of_nums)