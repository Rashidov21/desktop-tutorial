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

# task 1
# 10 bilan 35 orasida tasodifiy 5 ta sodan iborat massiv hosil qiling

# task 2
# task 1 ni list generator orqali qiling

# task 3
# massivda turli tipdagi ma'lumotlar bor agar ular soni massiv ichidan
# bittadan ko'p bo'lsa ularni alohida massivlarga yozing
# s = [True, 1, 0, False]
# i = [1,0]
# b = [False, True]

# n = ""
# for i in range(10):
#     n += str(i)

# print(n)
