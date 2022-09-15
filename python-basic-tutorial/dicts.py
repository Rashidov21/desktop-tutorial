# d = dict()
# d = {}

# print(type(d))  # <class 'dict'>

# my_dict = {
#     "name": "John",
#     "surname": "Doe",
#     "age": 12,
#     "pls": ["html", "css", "javascript"],
#     "friends": {
#         'ketmon': "mike",
#         "tesha": "miguel"
#     }
# }
# print(my_dict.get('name'))  # John
# print(my_dict["surname"])  # Doe
# print(my_dict["friends"])  # {'ketmon': 'mike', 'tesha': 'miguel'}
# print(len(my_dict))  # 5
# for k in my_dict:
#     print(k)  # faqat key lar chiqadi

# for items in my_dict.items():
#     print(items)  # hamma elementlar tuple ko'rinishida chiqadi

# for val in my_dict.values():
#     print(val)  # hamma value lar chiqadi
# k = 'abc'
# v = [1, 2, 3]
# d = dict(zip(k, v))
# print(d)  # {'a': 1, 'b': 2, 'c': 3}

# my_dict['name'] = "Mike"
# print(my_dict.get('name'))  # Mike

# print("age" in my_dict)  # true
# print("none" in my_dict)  # false

my_dict = {
    "name": "John",
    "surname": "Doe",
    "age": 12,
    "pls": ["html", "css", "javascript"],
    "friends": {
        'ketmon': "mike",
        "tesha": "miguel"
    }
}

# print(my_dict["personal"])  # KeyError: 'personal'
# print(my_dict.get('personal'))  # None
# print(my_dict.setdefault("name", 0))  # John
# print(my_dict.setdefault("personal", 0))  # 0
# print(my_dict["personal"])  # 0

# dict_keys(['name', 'surname', 'age', 'pls', 'friends'])
# print(my_dict.keys())
# for k in my_dict.keys():
#     print(k)
# my_dict.pop()  # TypeError: pop expected at least 1 argument, got 0
# my_dict.pop("surname")  # surname keylik item ni o'chirish
# my_dict.popitem()  # tasodifiy bitta element o'chirish
# new_dict = my_dict.copy()  # nusxa olish
# print(new_dict)

# my_dict.update({'a': 1, 'b': 2})  # boshqa dict bilan dict ni yangilash
# print(my_dict)


# keys = ["a", "b", "c"]
# values = [1, 2, 3]
# d = {k: v for (k, v) in zip(keys, values)}
# print(d)  # {'a': 1, 'b': 2, 'c': 3}


# task 1
# d dictdan faqat toq sonli itemlarni output_dict ga yozing dict generator orqali
# d = {"a": 4, "b": 1, "c": 7, "d": 9}
# output_dict = {k: v for (k, v) in d.items() if v % 2 == 1}
# print(output_dict)  # {'b': 1, 'c': 7, 'd': 9}

# ALL METHODS
# 1-get()
# 2-setdefault()
# 3-keys()
# 4-items()
# 5-values()
# 6-pop()
# 7-popitem()
# 8-copy()
# 9-clear()
# 10-update()
# 11-fromkeys()

# print({}.fromkeys(["a", "b"], True))  # {'a': True, 'b': True}


