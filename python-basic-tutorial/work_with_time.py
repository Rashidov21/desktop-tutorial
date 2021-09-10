"""
Pythonda vaqt bilan ishlash
time moduli
datetime moduli
calendar moduli
timeit moduli

"""
# Modullarni ozimizni dasturimizga yuklymiz
# import time
# print(time.time()) 1970 1-yanvardan buyon xozirgi vaqtga qadar necha sekund otgani
# days = ["dushanba","seshanba","chorshanba","payshanba","juma","shanba","yakshanba"]
# months = ["","yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr",
#           "oktabr","noyabr","dekabr"]
# t = time.localtime()
# # print(t)
# print(f"Bugun \n{days[t[6]]}, {t[2]}-{months[t[1]]},{t[0]}, {t[3]}:{t[4]}:{t[5]},"
#       f"{t[2]}-{t[1]}-{t[0]} ", )
# hafta kuni = {days[t[6]]}
# oy kuni va nomi = {t[2]}-{months[t[1]]}
# xozirgi soat:minut:second = {t[3]}:{t[4]}:{t[5]}
# qisqa sana = {t[2]}-{t[1]}-{t[0]}

# strftime
# Sanani time modulidan formatlash orqali uni biz tushinadgan xolatga olish
# t = time.strftime("%d.%m.%Y")
# print(t)#bugungi kun:oy:yil
# t = time.strftime("%H:%M:%S")
# print(t)
#
# users = {}
# users["loggedin"] = time.strftime("%d.%m.%Y  %H:%M:%S")
# print(users) # {'loggedin': '09.09.2021  14:32:20'}

# %y = yil >> 21
# %Y = yil >> 2021
# %m = oy >> 01..12
# %b = Yanvar >> yan
# %B = Yanvar >> Yanvar
# %d = kun >> 01...31
# %j = kun yil boshidan beri >> 001 .... 366
# %U = hafta raqami yil ichida >> 01...53
# %H = soat 00 dan 23
# %I = soat 01 dan 12
# %M = minut 00 dan 59
# %S = sekund 00 dan 59 , ayrim hollarda 61


# for i in range(11):
#     time.sleep(1) # 1 sekundga scriptni toxtatish
#     print(i)

x = 10 and 1 # 10
print(x)
x = 10 or 0 # 10
print(x)
