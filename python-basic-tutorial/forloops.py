# str >> "", '', """"""
# int >> 99,-99
# float >> 32.5, -99.6
# bool >> True , False

# print(10 + 5)# 15
# print(10 - 5)# 5
# print(10 * 5)# 50
# print(10 / 5)# 2
# print(10 // 3)# 3
# print(10 % 3) # 1
# print(10 ** 5) #100 000
# print(10 > 5) # True
# print(10 >= 5) # True
# print(10 < 5) # False
# print(10 <= 5) # False
# print(10 != 5) # True
# print(10 == 5) # False
#
# # and >> VA
# # or >> yoki
# # is , is not , in , not in
# print("a" in "alla") # True
# print( not True) # False

# if
# elif
# else
# if 10 > 20:
#    print("Hello")
# elif 10 > 5:
#     print("hi")
# else:
#     print("Bye-Bye")
# name = input("Your name ?")
# if name.lower() == "john":
#     print(f"Hello , {name}")
# else:
#     print("Try again")

# s = "Python"
# for letter in s:
#     print(letter)
# arr = [2,6,4,8,96,251,5,2,0]
# arr.sort()
# print(arr[-2])
# s = "javascript"
# # print(len(s)) # 10
# for i in range(len(s)):
#     print(s[i])
# for i in range(10):
#     print(i)
# else:
#     print("Sikl tugadi")
# i = 0
# while True:
#     i += 1
#     print(i)
# for i in range(10):
#     if i % 2 == 0:
#         continue
#     print(i)
# i = 0
# while True:
#     i += 1
#     print(i)
#     if i == 100:
#         break















# if 10 > 5:
#     print(10)
# else:
#     print(5)

# for i in range(10,30,5):
#     print(i)
# while True:
#     print("Python")
# i = 1
# while i <  101:
#     print(i)
#     i += 1
# x = True
# while x:
#     fruit = input("mevani kiriting")
#     if fruit == "stop":
#         x = False
#     else:
#         print(f"Meva nomi = {fruit}")

# summa = 0
# while True:
#     n = input("Sonni kiriting \n:")
#     if n == "stop":
#         break
#     n = int(n)
#     summa += n
# print(summa)

# for i in range(10):
#     if i % 2 == 1:
#         continue
#     else:
#         print(i)
# print(int(15.5)) #15
# print(float(1))#1.0
# print(round(1.5236,2))#1.52
# print(abs(-12))#12
# print(pow(2,2)) #4
# print(max(1,5,6,8,9))
# print(min(1,5,6,8,9))
# print(sum([1,2,3]))
# import math
# print(math.pi)
# print(math.ceil(63.5))
# print(math.floor(63.9))

# import random
# print(random.random())
# print(random.randint(0,10))
# print(random.randrange(0,10))
# arr = [1,2,3,4,5,6,7,8,9]
# random.shuffle(arr)
# str = "assalomalaykum"
# print(random.sample(str,5))

# print(random.sample(range(300),5))
# arr = [1,2,3,4,5]
# print(random.choice(arr))
# s = "python"
# arr = [1,2,3,4,5]
# # print(s[0],s[1],s[2],s[3],s[4],s[5])
# # print(s[10]) #IndexError:
# print(s[::-1]) # reverse
# print(s[0:2]) # py
# print(arr[2:4]) # [3, 4]

# a = 12
# n = "John, age = %s" %a #2.7
# print(n)
#
# x = 12
# y = "David, age = {0}".format(x) #2.7
# print(y)
#
# age = 12
# name = f"Abdullo , age = {age*2}" # 3.5
# print(name)
# print("Python".center(15))
# s = "*Lorem ipsum dolor amet sit*"
#print(len(s)) # 28
# print(s.strip("*"))
# print(s.lstrip("*"))
# print(s.rstrip("*"))
# print(s.split(" ")) # massiv qilish
# print(s.rsplit(" ")) # massiv qilish
# print("".join(["str", "str2"]))
# print(s.upper())
# print(s.lower())
# print(s.capitalize())
# print(s.title())
# s = "*Lorem ipsum dolor amet sit*"
# print(s.startswith("*Lorem")) # True
# print(s.endswith("sit*")) # True
# print(s.replace("amet", "dolor"))
# print(s.find("ipsum"))
# print(s.index("L"))
# print(s.count("o"))
# s = "*Lorem ipsum dolor amet sit*"
# print(s.isalnum()) # faqat son va harf
# print(s.isalpha()) # faqat  harf
# print(s.isdigit()) # faqat  son
# print(s.isnumeric()) # faqat son va rim raqamlari . 10 xonali sonlar ham
# print(s.isupper())
# print(s.islower())
# print(s.istitle())
# print(s.isprintable()) # print () orqali print qsa boladgan str lar
# import random
# letters_a = "abcdefghjklmnopqrstuzx"
# letters_A = letters_a.upper()
# symbols = "@#$%^&*()_+=/"
# numbers = "1234567890"
#
# p = letters_A + letters_a + symbols + numbers
#
# passwords_count = int(input("Nechta parol ? \n:"))
# letters_count = int(input("Nechta belgi ? \n:"))
#
# for i in range(passwords_count):
#     password = ""
#     for k in range(letters_count):
#         pLetter = random.choice(p)
#         password += pLetter
#     print(password)


