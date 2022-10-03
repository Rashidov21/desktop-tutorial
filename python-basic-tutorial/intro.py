
# import os
# print(os.path)
# IDE - Integrated Development Enviroment, dasturlash uchun mos muhit, vs code yoki pycharm
# Interpretator - kodni sintaksisga tekshiruvchi dastur , agar xatolik bo'lsa uni toxtatadi
# bo'lmasa uni kompilyatorga uzatadi
# Compilator - kodni bitlar darajasida kompyuterga tushuntiruvchi tarjimon dastur

# print('Hello world')
# print("Hello world")  # ma'lumotlarni chop etish

# PEP8 - pythonda kod yozish uchun ko'rsatmalar to'plami

# name = "john"
# age = 10
# _salary = 1200
# userProfilePhotoUrl = './photos/'
# user_profile_photo_url = './photos/'
# # constanta
# SALARY = 1200
# SALARY = 1000
# print(SALARY)  # 1000

# Data Types
# int ,float, str , bool , None , list , dict , tuple, set , frozenset, range
# n = 10
# x = 10.1
# z = 'str'
# print(type(n))
# print(type(x))
# print(type(z))
# version = 3.10
# s = 'python %s' % version  # python 2
# s = 'python {0}'.format(version)
# s = f'python{version}'
# print(s)
# s = "python"
# s = """python"""
# print("akakfbkabfkabfakfbakf \
#     ldjalsdnjalsdals\
#         ksnadlndflasndlasndalsdnas \
#             asndjklasndlasndalda")
# print(len(s))  # len = length

# print("python \n 3.10")
# print("python \t 3.10")
# print("python \a 3.10")

# Arifmetika

# print(2 + 2)
# print(2 - 1)
# print(2 * 2)
# print(20 / 2)
# print(17 // 2)
# print(17 % 2)
# print(2 ** 2)

# Logika
# print(2 == 2)
# print(2 != 2)
# print(2 >= 2)
# print(2 <= 2)
# print(2 and 2)  # &&
# print(2 or 2)  # ||
# print("s" in "slaom")  # true
# print('s' not in "salom")  # false
# javascript is "better"
# print('javascript is "better"')
# print("""javascript "is" 'better' """)
# print("javascript is \"better\" ")
# n = int(input('number : '))
# print(type(n))  # <class 'int'>
# print(n ** 2)

# int() , str() , float()
# str_num = "12.6"
# print(float(str_num) - 0.6)  # 12.0
# print(int("12") + int("12"))

# print(str(12) + 12)
# print("12" + 12)
# print("12" * 5)


# Data Structure
# int , str, bool
# list , tuple, dict , set , frozenset
# l = [1, "s", True]
# print(l[0])  # 1
# l.append(0)
# l.pop()
# l.clear()
# l.copy()
# l.count(1)
# l.extend([0, 2, 4])
# l.index(0)
# l.insert(1, "a")
# l.remove("a")
# l.reverse()
# l.sort()

# t = (1, 2, 3)
# print(t[2])
# for i in t:
#     print(i)
# l = list(t)
# print(type(l))  # list
# t = tuple(l)
# print(type(t))  # tuple
# SQL

import sqlite3

con = sqlite3.connect('./test.db')
cur = con.cursor()

# create_db = """
#     CREATE TABLE students(
#         student_id INTEGER PRIMARY KEY,
#         name TEXT,
#         age INTEGER,
#         course TEXT,
#         pls TEXT);"""
# cur.execute(create_db)  # 1- buyruq table ochish
# print("success")

insert_data = """
    INSERT INTO students
    VALUES(1,"John Doe",20,"Backend","Python, Javascript");
"""
cur.execute(insert_data)  # 2- buyruq table ga malumot yozish
con.commit()
print("success")

select_data = """
    SELECT * FROM students WHERE student_id=1;
"""
data = cur.execute(select_data)
print("success", data.fetchall())

delete_data = """
    DELETE FROM students WHERE student_id=1;
"""
cur.execute(delete_data)
print("success")
