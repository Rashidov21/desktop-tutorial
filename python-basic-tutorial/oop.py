# Obyekt
# 1-Attribute - sifatlari
# 2-methods - hatti harakatlari

# class - bu yangi obyekt yaratish
# class MyClass:
#     # o'zgaruvchilar bular obyekt sifatlari
#     name = 'John'
#     surname = 'Doe'

#     # funksiyalar bular obyekt metodlari
#     def info(self):
#         print(self.name, self.surname)

# # yangi obyekt namunasini yaratish
# ex1 = MyClass()
# ex2 = MyClass()
# # yangi obyekt namunasi methodlariga murojaat
# print(ex1.info())
# print(ex2.info())


# definition of the class starts here
# class Person:
#     # initializing the variables
#     name = ""
#     age = 0
#     # defining constructor

#     def __init__(self, personName, personAge):
#         self.name = personName
#         self.age = personAge
#     # defining class methods

#     def showName(self):
#         print(self.name)

#     def showAge(self):
#         print(self.age)


# person1 = Person("John", 23)
# person2 = Person("Anne", 102)
# person1.showAge()  # 23
# person2.showName()  # "Anne"
# x = "str"

# print(type(person1))


# class Calculator:
#     version = "1.0"
#     result = 0

#     def plus(self, number1, number2):
#         self.result = number1 + number2
#         return self.result

#     def minus(self, number1, number2):
#         self.result = number1 - number2
#         return self.result

#     def div(self, number1, number2):
#         self.result = number1 / number2
#         return self.result

#     def mult(self, number1, number2):
#         self.result = number1 * number2
#         return self.result

# calc = Calculator()
# print(calc.plus(1, 1))
# print(calc.plus(2, 1))
# print(calc.plus(4, 2))
# print(calc.plus(2, 2))


# Inkapsulyatsiya
# Polimorfizm
# Meros olish

# class - bir turga oid obyektlar tavsifi
# class namnunasi - aniq biror bir obyekt

class Car:
    count_of_wheels = 4

    def __init__(self, model, color, speed):
        self.model = model
        self.color = color
        self.speed = speed

    def drive(self):
        print(
            f"{self.model} rusumli mashina\n{self.speed} km tezlikda harakatlanishni boshladi.")


# __init__ mmethodi ishga tushib qiymatlarni yangi class namunasiga biriktiradi
damas = Car("Shevrolet", "oq", 110)
# damas - bu yangi konkretniy bitta obyekt
damas.drive()
print(damas.count_of_wheels)  # 4

firecar = Car("Volvo", "sariq", 100)
firecar.drive()
