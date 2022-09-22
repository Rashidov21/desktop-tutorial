import requests


# BaseException - Barcha xatoliklarni o'z ichiga olgan obyekt
# 1-Sintaksis xatolar
# 2-Mantiqiy xatolar
# 3-Dastur ishlashi davomida vujudga kelishi mumkin bo'lgan xatoliklar


# f = open("none.pdf", "r")
# print(f.read())
# f.close()


# with open("none.pdf", "r") as file:
#     print(file.read())

# try:
#     # Xatolik bo'lishi mumkin bo'lgan kod
#     print(1 / 0)
# except Exception as error:
#     # Xatolik bo'lsa ishlashi kerak bo'lgan kod
#     print(error)  # division by zero
# else:
#     # Xatolik bo'lmasa ishlashi kerak bo'lgan kod
#     print("OK")
# finally:
#     # Xatolik bo'lsa-bo'lmasa ishlaydigan kod
#     print("Final action")
# print(10)

# try:
#     res = requests.get(url='https://google.uz')
# except Exception as error:
#     print(error)
#     res = requests.get(url='https://google.com')
# else:
#     print("OK = ", res.status_code)

# x = None

# try:
#     x = 1 / 0
# except ZeroDivisionError as err:
#     print(err)
#     raise ZeroDivisionError
# else:
#     print("OK , X = ", x)
