from modules.app import test
print(test)

# def funksiya nomi(argument,argument):
#     funsiya tanasi
# print(plus(2, 2)) # NameError


# def plus(x, y):
#     return x + y


# p = plus
# print(p(1, 2))  # 3


# task 1
# foydalanuvchidan 2 ta son qabul qiladigan  va ular orasida kattasini qayta-
# radigan funksiya yozing
# task 2
# son qabul qiladigan va uni kavadratini qaytaradigan funksiya yozin
# uni for siklida ishlatish orqali 1 dan 10 gacha bolgan sonlarni
# kvadratlarini console ga chiqaring

# def return_kvadrat(num):
#     return num ** 2


# for i in range(1, 11):
#     print(return_kvadrat(i))

# a = 10


# def main(x):
#     i = 0  # local variable
#     print(a * 2)  # 20
#     print(x)
#     if True:
#         print(i)


# main(1)
# print(i * 2)  # NameError: name 'i' is not defined

# def main(x):
#     global a
#     a = 10
#     return x


# print(main(1))  # 1
# print(a + 2)  # 12

# def main(name=None, surname=None, position="worker"):
#     return f"{name} {surname} {position}"


# # TypeError: main() missing 1 required positional argument: 'name'
# print(main())  # None None worker
# print(main("john"))  # john None worker
# print(main("john", "doe", "staff"))  # "john", "doe", "staff"
# print(main("john", "doe", ))  # "john", "doe", "worker"

# if b is not None:
#     print(b)

# task 3
# user haqida ma'lumot yiguvchi  5 ta argument qabul qiladigan funksiya yozing

# task 4
# user kiritgan sonni qabul qilib 0 dan shu son qadar takrorlanish hosil qiladigan va shu sonlar orasidagi barcha toq sonlarni chiqaradigan
# funksiya yozing agar son kiritmasa son 50 ga teng


# def main(x):
#     """function docstring"""
#     pass


# print(main.__doc__)

# task 1
# . Foydalanuvchi yiliga 10% miqdorida X sum miqdorida omonat qo'yadi (har yili uning depozit hajmi 10% ga oshadi. Ushbu pul depozit miqdoriga qo'shiladi va har yili 10% ga ortib boraveradi)
# bank nomli funksiya yozing foydalanuvchi qancha miqdorda summa va necha yilga omonat qoyishini kiritadi dastur necha yil kiritilgan bolsa omonat miqdori qanchaga oshganligini hisoblashi kerak.
