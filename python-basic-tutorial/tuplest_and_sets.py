# tuple
# t = tuple()
# t = ()
# t = (1, 2, 3, 4, 5, 6, 7, 8, 9)
# for i in t:
#     print(i)

# print(t[0])

# print(t[0:2])  # (1, 2)
# print(t[::-1])
# # del t[0]  # TypeError: 'tuple' object doesn't support item deletion
# print(t.index(7))  # 6
# print(len(t))  # 9

# t = (1, 2, 3)
# t = list(t)
# t.append(4)
# t = tuple(t)
# print(t)
# del t[-1]  # error - chunki bu tuple !

# set
# s = set()
# s = {}
# s = set("string")
# st = set("alla")
# ns = set([1, 2, 3, 2, 2, 3, 5, 4, 6, 5])
# print(st)  # {'a', 'l'}
# print(ns)  # {1, 2, 3, 4, 5, 6}
# QuerySet + QueryDict
# s = set("str")
# a = set("abc")
# print(s.union(a))  # {'s', 'r', 'b', 'a', 't', 'c'}
# fs = frozenset("python")
# print(fs.union(s))  # frozenset({'s', 'g', 'n', 't', 'i', 'r'})

# print(type(range(10)))  # <class 'range'>
# print([x for x in range(1, 5, 2)])  # [1, 3]
