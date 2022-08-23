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