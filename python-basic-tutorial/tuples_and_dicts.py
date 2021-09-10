# x,y,*z = [1,2,3,4,5] # * orqali upakovka qilish : packing
# print(type(z)) # class:list
# print(x,y,z) # 1,2, [3,4,5]
# s,*s2 = "Muy Bueno !" # ketma ketlikni bir variablega upakovka qilish
# print(s,s2) # M ['u', 'y', ' ', 'B', 'u', 'e', 'n', 'o', ' ', '!']

# Tupples
# tuple() =  Kortej , o'zgarmas tartibli elementlar to'plami

# t = tuple("string")
# print(t) # ('s', 't', 'r', 'i', 'n', 'g')
# t = ()
# print(type(t)) # <class 'tuple'>
# t = ('aloha', 'chicas')
# print(t[0]) # t kortejining birinchi elementi
# t[0] = 'sinioras' # TypeError

# tupple methods:
# 1. len()
# 2. min()
# 3. max()
# 4. index()
# 5. count()
# t = (1,2,3,4,5)
# for i in t: # iterator orqali elementlarini olish
#     print(i)
# t2 = t[1:3]
# print(t2) # (2, 3)
# print(1 in t) # True
# print(1 not in t) # False

# Sets >> set()
# Ko'pliklar >> BU tartibsiz unikal elementlar to'plami
# s = set()
# print(type(s))
# print(s)
# s = set("string")
# print(s)
# s = set([1,2,3,1,2,3])
# print(s) # {1, 2, 3} set da bir element boshqa takrorlanmaydi

# print(set("abc") == set("Abc")) # False
# s = set([1,2,3,4,5])
# print(1 in s, 12 not in s)# True , True
# s2 = s.copy() # nusxasini olish
# print(s2)
# s.clear() # barcha elementlarni ochirib set ni tozalaydi
# s.pop()# bitta elementni ochiradi
# s.remove(3) # 3 ochib ketadi
# s.remove(7) # KeyError
# s.discard(10) # Xatolik yuzaga kelmasdan ochirish
# s.add(6) # set ga element qoshish
# print(s)

# n = [2,3,5,5,6,7,2]
# # s = set(n) # {2,3,5,6,7}
# s = {x for x in n} # {2,3,5,6,7}
# print(s)

# numbers = list(range(10)) # [0....9]
# evens = [x for x in numbers if x % 2 == 0]
# odd = [i for i in numbers if i % 2 != 0]
# print(evens)
# print(odd)

# task 1
#input: words = alla,abba,jidda,opodda,anna
# output: ala, aba, jida

# task 2
# input: t = tuple("uzbekistan")
# output: t = "natsikebzu"
# t = tuple("uzbekistan")
# l = "".join(reversed(list(t)))
# print(l)


# Dictionary >> dict()

# Toplam , ushbu toplam ichidagi maulotlarga kalit hamda qiymat sifatida murojaat
# qilinadi

# key + value
# Address Book >> key(abdulloh) > value(+99891234567)
# d = {} # dict()
#print(type(d)) # class dict


# print(user['name']) # Abdullo
# d = {
#     "a":True,
#     "b":{
#         "bc":152
#     },
#     "c":"string",
#     "d":123,
#     "e":None,
# } #dict  ozini ichida istalgan turdagi qiymatlarni saqlay oladi
# a = d["b"]["bc"] >> 152
# user = {
#     "name":"Abdullo",
#     "age":15,
#     "skills":['html','css','js']
# }
# for i in user:
#     print(i) # faqar kalitlarini qaytaradi

# for i in user.items():
#     print(i) # ('name', 'Abdullo') tuple holatida har bitta item'i

# for i in user.values():
#     print(i) # faqat qiymatlarni olamiz

# newuser = user.copy() # user dict ni nusxasi
# print(newuser)
# import pprint
# pp = pprint.PrettyPrinter()
# brands = {
#     'phones':"Xiaomi",
#     'laptops':"Apple",
#     'gadgets':"Huawei"
# }
# print(pp.pprint(brands))
# brands.update({"smartwatches":"Samsung"}) # dict qabul qilib siz korsatgan dictni yangiledi
# print(brands) #{'phones': 'Xiaomi', 'laptops': 'Apple', 'gadgets': 'Huawei', 'smartwatches': 'Samsung'}
# brands['phones'] = 'Nokia' # key boyicha valueni yagilash
# print(brands)

# print(len(brands)) # 3
# print(brands['phones'])
# p = brands.get("phones") # dict dan value olish
# print(p)

# Methods:
# 1. items()
# 2. keys()
# 3. values()
# 4. get()
# 5. pop() >> key oraqali elemen ochirish
# 6. popitem() tasodify bitta elementni ochradi
# 7. update() dict ni yangiledi
# 8. clear() dictni tozalaydi
# 9. copy() nusxasini olish

# task 1
# input: user word >> olma
# output: {"o":1,"l":2,"m":3,"a":4}
