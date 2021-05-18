# 2. Foydalanuvchi bergan sonlar oralig’idagi barcha sonlarni 
# listga yozuvchi kod yozing:
# masal 5  bilan 10 orasidagi sonlar > nums = [6,7,8,9,10]
txt = ['txt', 'pdf', 'docx']
filename = input('File >>').split('.')
if filename[1] in txt:
    print('TEXT file')
else:
    print('Not TEXT')
















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