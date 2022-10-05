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

# task 9
# m - massivida turli qiymatlarda elementlar mavjud siz map orqali
# agar element butun yoki float son bo'lsa uni alohida massivga yozishingiz
# kerak
# input_arr = ["1.0", 3.6, 1, "sjdh", True, None, [1, 2]]
# output_arr = [1.0, 3.6, 1, 1, 2]
# task 10
# User kiritgan qator ichidan raqamlarni ajratib oladigan function yozing

# task 11
# User kiritgan qatorda nechi marta “A” harfi ishtirok etganini hisoblang , agar “A” harfi qator boshidan boshlab 3 martadan kop ishtirok etsa u xolda barcha qolgan “A” harflarini “E” harfiga o’zgartiring

# task 12
# 100 marta takrorlanadigan kodda nechi marta foydalanuvchi kiritgan son duch kelganini toping; (kod 100 marta takrorlanadi user son kiritgan boladi  0 <  userNum < 100 ; random shaklida olingan takrorklanishdagi son user ni soniga togri kelsa shart bajarilgan demak; nechi marta userni soni togri kelganini chiqaring)

# task 13
# Aviakompaniya yolovchilar chipta pularini hisblay olmay qolishdi ularga yordam berin. Bir kunda 3 ta reys amalga oshirishadi har bir reysda minimum 60 ta maximum 120 ta yolovchi tashiladi, chipta narxi 120 min so’m , aksariyat chiptalar bir hil narxda yani ekonom class uchundir. Faqat umumiy yolovchilarni 3% gina biznes klassda uchishadi va ular uchun chipta narxi 380 ming som. Siz bir kunda Aviakompaniya qancha chipta sotganini va ulardan nechtasi ekanom class va nechtasi biznes class ekanini hisoblang summalarni chiqaring.
# string methods

# t = (x for x in range(10) if x % 2 == 0)
# print(tuple(t))

# task 14
# a = [1, 2, 4, 9, 3, 12, 4, 5, 74, 5, 21, 0, 3, 21, 5, 6, 21, 15, 5, 32, 3]
# b = [2, 4, 5, 6, 4, 2, 3, 12, 10, 3, 21, 5, 3, 1, 1, 52, 3, 5, 4, 85, 69]
# Shu ikkala massivdan user kiritgan sondan kichiklarini olib alohida massiv qiluvchi
# funksiya yozing

# task 15
# John = 20
# Miguel = 12
# Mike = 30
# Sara = 20
# David = 5
# Xuddi shu korinishda matnlarni personal.txt fayliga yozuvchi funksiya yozing va get_salary  nomli funksiyada ushbu fayldan alohida alohida qatorlarni olib umumiy summa
# nechiga teng ekanini hisoblang
# s = ['John = 20', 'Mike = 12']
# n = 0
# for i in s:
#     n += int(i.split(" ")[2])
# print(n)

# task 16
# numbers.txt fayliga 0 bilan 999 orasida tasodify 100 ta sonni yangi qatordan yozing
# ular ichida nechida 500 dan kichik son bor ekanini aniqlang

# task17
# post.html faylini hosil qiling unga oddiy html fayldan kodlar yozing ushbu fayl ichida
# necha maratoba h1 dan h6 gacha bo'lgan teglar ishtirok etgan aniqlang

# task18
# foydalanuvchidan telefon raqamlarini so'rang va raqamni kiritgan vaqtda
# DB da xuddi shu raqamga o'xshash raqam bo'lsa uni chiqarib beradigan
# dastur tuzing
# Ya'ni agar men 931234567 ni kiritsam 67 bilan tugagan yoki
# bitta kompaniyaga tegishli raqamlarni chiqarsin


# task19
l = ["number", 'name', 'age', 'info']
t = (1, 2, 3)
n = ("john", "mike", "sara")
a = (23, 41, 63)
text = ["lorem", "ipsum", "dolor"]

# ushbu ma'lumotlardan foydalanib har bir user uchun alohida dict hosil qiling
# va dict larni users massivida saqlang
