# -*- coding: utf-8 -*-
# s = str("new string")
# s = "new str"
# s = 'new str'
# s = """new str""" #kop qatorli str lar uchun + documentation uchun
# print(s[0]) # 1- element
# print(s[-1]) # oxirgi element
# print(type(s))

# s = "next \n line"
# s = "next \t line"
# s = "next \a line"
# s = "next \' line"
# s = "next \" line"
# s = "next \\ line"
# s = "Python"
# print(s[0],s[1],s[2],s[3],s[4],s[5])
# for i in s:
#     print(i)
# apple = "Apple Company"
# print(apple[0:5]) # srez, index orqali qirqib olish
# x = apple[0:5]
# print(x)
# print(apple)
# print(apple[-8:-1])
# print(apple[::-1])
# name = input()
# print(name[::-1]) # teskari qilish
# p = "Pinkpeople"
# print(p[4:8]) # indexlar boyicha olish
# s = "Python" # len() >> int
# print(len(s)) # 6 ta element bor
# name = "abdullo"
# age = 12
# info = "Meni ismi {0}, yoshim esa {1} ".format(name, age) #python 2.7 versiyada
# print(info)
# info = f"Meni ismi {name}, yoshim esa {age} " # python 3 va undan tepa versiya
# print(info)
# s = "abc Python abc is better abc"
# a = "\nabc\n"
# print(s.strip("abc"))
# print(a.strip())

# s = "Javascript programming language"
# arr = s.split(' ') #siz korsatgan belgi boyicha qatorni bolib listga yozadi
# print(arr)
# s = "Javascript,programming,language"
# arr = s.split(',')
# print(arr)
# # s.splitlines()
# arr = ['o','l','m','a']
# s = "".join(arr)# array ni qatorga aylantiradi
# print(s)

# words = input("sozla kiriting ...\n")
# arr = words.split(" ")
# print(arr)
# w = "".join(arr)
# print(w)
# s = 'python'
# print(s.upper()) # katta harf
# s = 'PYTHON'
# print(s.lower()) # kichina harf
# s = "python language"
# print(s.capitalize()) # birinchi belgi katta
# print(s.title()) # har bitta sozni birinchi belgisi katta
# s = "Python programming languge"
# print(s.find("pro")) # siz qidirayotgan sozni boshlanish indexini qaytardi

# name = input("Ism")
# if name.startswith("abdu"):
#     print('True')
# else:
#     print('False')
# surname = input("Familya")
# if surname.endswith('ov'):
#     print('True')
# else:
#     print('False')

# s = "exam Exam exam Exam"
# print(s.count('Ex'))
# print(s.count('ex'))
# print(s.count('a'))

# n = "Apple Company"
# print(n.replace("Apple","Samsung"))

# Qator ichini turini tekshirish | True or False
# s = "12"
# print(s.isalnum()) # True | Agar faqat son va harf bolsa
# d = "adh#"
# print(d.isalnum()) # False
# print(d.isalpha()) # False | True faqat harflar bolsa
# x = "23"
# print(x.isdigit()) # True  | agar faqat son bolsa
# z = "OLMA"
# print(z.isupper()) # True
# print(z.islower()) # False
# print(z.istitle()) # False

# md5 , sha1 , sha224, sha512
# import hashlib
# h = hashlib.md5(b"admin12345") # MD5 algoritmida byte larni shifrlash
# shifr = h.hexdigest()
# print(shifr)
# print(chr(1050)) # belgi kodi >> K
# print(ord("a")) # kodi >> 97
