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
################################################################
# datetime
import datetime
# 1. timedelta
# td = datetime.timedelta([days],[seconds],[microseconds],[milliseconds],[minutes],[hours], [week])
# td = datetime.timedelta(weeks=1) #7 days, 0:00:00
# td = datetime.timedelta(days=1) #1 days, 0:00:00
# td = datetime.timedelta(hours=1) # 1:00:00
# td = datetime.timedelta(weeks=2,days=10,hours=5)
# td2 = datetime.timedelta(weeks=1,days=5, hours=2)
# print(td - td2) # Matematik ammallarni barjasi ishledi : +,-,*,/,%,**

# 2. date
# t = datetime.date(2021,9,11)
# # print(t) #2021-09-11
# today = datetime.date.today()
# year = today.year
# month = today.month
# day = today.day
# # print(today)#2021-09-11
# print(today, year, month, day)

# 3. calendar
# import calendar
# c = calendar.Calendar(0)
# c = calendar.TextCalendar(0)
# print(c.formatyear(2021)) # 2021 text kalendar
# c = calendar.LocaleTextCalendar(0, "Uzbek_Uzbekistan.1251")
# print(c.formatyear(2021))
# c = calendar.HTMLCalendar(0)
# print(c.formatmonth(2021,9)) # html september calendar


# 4. timeit
# from timeit import Timer
#
# code1 = """\
# i, j = 1, 0
# while i < 10001:
#     j += 1
#     i += 1
#     """
# t1 = Timer(stmt=code1)
# print("while:", t1.timeit(number=1000))
# code2 = """\
# j = 0
# for i in range(1,10001):
#     j += 1
# """
# t2 = Timer(stmt=code2)
# print("for:", t2.timeit(number=1000))
# code3 = """\
# j = sum(range(1,10001))
# """
# t3 = Timer(stmt=code3)
# print("sum:", t3.timeit(number=1000))

# task 1
# l = list(range(1,10**5))
# r = []
# for i in l:
#     if i % 2 == 0:
#         r.append(i)

# task 2
# input: nums = range(0,11)
# output:
# [1,2,3,4,5,6,7,8,9]
# {"a":1...,"h":9}
# {1,2,3,4,5,6,7,8,9}
# (1,2,3,4,5,6,7,8,9)

# task 3
# input:10,30
# output : oktabr , 30 kun, seshanba
# while True:
#     print("Hello world")
# for i in range(0,10):
#     print(i)

