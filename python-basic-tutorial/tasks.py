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

# l = [x for x in range(5)]
# print(l)  # [0, 1, 2, 3, 4]
# l = [x for x in range(5) if x > 2]
# print(l)  # [3, 4]
# arr = [
#     [1, 2, 3],
#     [6, 5, 4],
#     [7, 8, 9]
# ]
# doned_arr_with_gen = [k for x in arr for k in x if k % 2 == 0]
# print(doned_arr_with_gen)  # [2, 6, 4, 8]

# doned_arr = []

# for inner_arr in arr:
#     for num in inner_arr:
#         if num % 2 == 0:
#             doned_arr.append(num)

# print(doned_arr)  # [2, 6, 4, 8]

# task 4
# a = [1, 2, 4, 65, 8, 8, 6, 2, 6, 2, 2, 3]
# b = [4, 5, 65, 7, 98, 5, 12, 2, 65, 89, 47]
# ushbu massivlarda ishtirok etgan sonlardan iborat massiv hosil qiling
# hosil bo'lgan massivda faqat sondan bitta bo'lishi kerak , ya'ni massiv elementlari
# unikal
# c = []
# for i in a:
#     if i not in c:
#         if i not in b:
#             c.append(i)
# for x in b:
#     if x not in c:
#         if x not in a:
#             c.append(x)
# print(c)
# task 5
# while orqali userdan kamida 5 ta sana qabul qiling
# agar sana haqiqatda to'g'ri sana bo'lsa uni massivga yozing aks holda davom eting
# d = "12.36.2012" >> False
# d = "12.30.2012" >> True
# task 6
#    * # *
#    * # *
#    # * #
#    # * #

# task 7
#  Odil har kuni muntazam 9 soatdan uxlashni reja qilgan. Siz uning uchun u soat nechida uxlashga
#  yotsa roppa rosa 9 soatdan keyin soat nechi bo’lishini hisoblaydigan dastur yozishingiz kerak.
#  Agar Tohir soat 22:00 da uhlashga yotsa demak uyg’onganida soat 07:00 bo’lishini ko’rsatishingiz kerak.
# Kirish : ‘22:00’
# Chiqish : ‘07:00’

# task 8
# 10 ta 2 xonalikdan katta butun son berilgan ulardan faqat 0 bilan tugaganlarini summasini hisoblang
