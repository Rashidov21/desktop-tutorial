import math
import random
# ARRAY
# l = list()  # bu faqat v1 ta argyument qabul qiladi
# l = []  # istalgancha elementlar vergul bilan korsatiladi
# print(len(l))  # 0

arr = [1, 2, 3, 4, 5]
# for i in arr:
#     print(i)

# arr[0] = 0  # element ozgartirish
# print(arr)

# print(arr[0])  # birinchi element
# print(arr[-1])  # oxirgi element
# print(arr[len(arr)-1])  # oxirgi element

# arr.append(0)
# print(arr)

# RANDOM
# print(random.choice("abc"))  # bitta tasodifiy element qaytaradi
# random.shuffle(arr)
# print(arr)  # array ni elementlarini chalkashtiradi
# # sample - siz korsatgan ketma ketlikdan siz korsatagncha tasodifiy element oladi
# print(random.sample(arr, 2))
# # randint - sonlar orasida bitta butun tasodifiy son qayataradi
# print(random.randint(1, 10))

#  task 1
# 1 bilan 30 ni orasida 5 ta tasodifiy sondan iborat massiv tuzing

# task 2
# 10 ta sondan iborat massivdan 3 ta tasodifiy elementini oling ular yigindisi 7 dan katta yoki kichik ekanini aniqlang

# task 3
# 3 marta massivni shuffle qilish orqali har safar bittadan son olinadi
# agar son 5 dan katta bolsa "KATTA" kichik bolsa "KICHIK" matni chiqadi

#  task 4
#  random sonlardan (0, 999) iborat massiv minimum 20 ta sondan iborat
#  agar son (0 , 99) orasida bosa uni kvadrati chiqadi
#  agar son(99, 399) orasida bosa kubi chiqadi
#  qolgan sonlarni o'zi console ga chiqdi

# task 5
# n ta elementdan iborat a va b sonlar diapazonidan tashkil topgan massiv
# hosil qiluvchi funksiya yozing
# kirish : masalan main(10, 3,90)
# chiqish : [5,4,6,8,14,56,68,61,52,66]

# task 6
# Userdan 3 ta son qabul qiling ularni to'g'ri joylashtirish orqali
# sonlardan  eng katta qiymatni xosil qiling
# 1,7,3 >> 731

# 150 ~ 200 >> 20
# a = []
# for i in range(20):
#     a.append(random.randint(150, 200))
# print(a)
# print(len(a))
# arr = [1, 2, 3, 4, 5]
# arr = [5, 4, 6, 8, 14, 56, 68, 61, 52, 66]

# a = list(range(10))
# # a = random.sample(range(150, 200), 20)
# print(a[-1])
# # a[start index:stop index]
# print(a[1:5])
# print("python"[2:])  # thon
# print("python"[:2])  # py
# print("tomato"[:-1]) #
# s = "tomato"
# a = s[:]
# print(a)  # nuxsa olish
# print(list("python"))  # ['p', 'y', 't', 'h', 'o', 'n']
# a, b = "A", "B"
# x, y, z = [1, 2, 3]
# print(x, y, z)  # 1 2 3

# l, *r = [1, 2, 3, [1, 2, 3, 6], 5, 6]
# print(l, r)  # 1 [2, 3, 4, 5, 6]

# print(r[::-1][2][3])  # 6

# print(list(range(5, 15))[2:8][3]) # 10
# arr = [1, 2, 3]
# arr2 = [4, 5, 6]
# print(arr + arr2)  # [1, 2, 3, 4, 5, 6]
# arr.extend(arr2)  # massivni kengaytirish
# print(arr)  # [1, 2, 3, 4, 5, 6]

# l = list(range(3)) * 2
# print("s" in "salom") # true
# print(0 in l)  # True
# print(0 not in l)  # False
# print(l)

# l = list(range(5, 10))
# for i, elem in enumerate(l):
#     print(f"index = {i}")
#     print(f"element = {elem}")

# arr = list(range(1, 11))
# done_arr = []
# for x in arr:
#     done_arr.append(x ** 2)
# print(done_arr)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# print([x**2 for x in list(range(1, 11))])
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# a = []
# for i in range(1, 11):
#     if i % 2 == 1:
#         a.append(i)
# print(a)  # [1, 3, 5, 7, 9]

# print([i for i in range(1, 11) if i % 2 == 1])  # [1, 3, 5, 7, 9]

# i = int(input())
# status = "salom" if i > 5 else "xayr"
# print(status)

# s = "salomov salom,salom palomov"  # >> salomov, salom palomov

# # for fullname in s.split(","):
# all_items = [x for k in s.split(",") for x in k.split(" ")]

# print(list(set(all_items)))  # ['salom', 'salomov', 'palomov']


# arr = list(range(1, 11))
# arr.append(10)
# arr.pop(0)
# print(len(arr))
# print(arr.index(7))  # 6
# print(arr.copy())  # nusxa olish
# print(arr.count(1))  # 1
# arr.reverse()  # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
# arr.remove(7)
# for i, k in enumerate(arr):
#     print(i, k)
# def upteen(x):
#     return x + 10


# arr = list(range(1, 11))
# print(list(map(upteen, arr)))  # [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
# print(map(upteen, arr)) # <map object at 0x000001DE168128E0>
# print(arr)


# def plus_all(num1, num2, num3):
#     return num1 + num2 + num3


# a = [1, 2, 3]
# b = [4, 5, 6]
# c = [7, 8, 9]
# print(list(map(plus_all, a, b, c)))  # [12, 15, 18]

# names = ["john", "mike", 'sara']
# salary = [120, 150, 110]
# print(zip(names, salary))  # <zip object at 0x000001A5F6E716C0>
# # [('john', 120), ('mike', 150), ('sara', 110)]
# print(list(zip(names, salary)))

# for name, salary in zip(names, salary):
#     print(f"name : {name} - salary - {salary}")

# a = 'abc'
# b = [1, 2, 3]
# print(list(zip(a, b)))  # [('a', 1), ('b', 2), ('c', 3)]

# arr = [0, None, 1, "python"]
# print(filter(None, arr))  # <filter object at 0x000001D1F78528E0>
# print(list(filter(None, arr)))  # [1, 'python']


# def get_upteen(x):
#     return x >= 10


# nums = [4, 5, 7, 9, 2, 2, 65, 4, 8, 6, 9, 5, 53, 3, 54, 65, 6]
# print(list(filter(get_upteen, nums)))  # [65, 53, 54, 65]


# def func_b(text):
#     if "b" in text.lower():
#         return text


# print(list(filter(func_b, input().split(" "))))
