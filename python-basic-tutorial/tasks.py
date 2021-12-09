import random
# task 1
# k = 15
# n = int(input("N = \n :"))
# for i in range(n):
#     print(k)
# task 2
# a = int(input("A = \n :"))
# b = int(input("B = \n :"))
# c = 0
# for i in range(a,b+1):
#     c += 1
#     print(i)
# print(f"a = {a} , b = {b}, soni = {c}")

# task 3
# a = int(input("A = \n :"))
# b = int(input("B = \n :"))
# c = 0
# nums = [x  for x in range(a , b)]
# nums.reverse()
# del nums[0]
#
# for i in nums:
#     print(i)
# task 4
# k = 15000
# summa = 1
# arr = []
# for i in range(1, 11):
#     summa += i**2
# print(summa)
# f = "1."

# s = 0
# for i in range(5):
#     s = float(f"{f}{i}") - float(f"{f}{i+1}")
#     print(s)
#     s = float(f"{f}{i+1}") + float(f"{f}{i+2}")
#     print(s)
#
# print(s)

# arr = []
# for i in range(1,5):
#     arr.append(float("1.{}".format(i)))
# print(arr)
# for i in range(len(arr)):
#     s = arr[i] - arr[i+1]
#     print(s)
#     s += arr[i+2]
#     print(s)

# task lists 1
# input : arr =[1 , N] ; N = range(50)
# output summ of arr
# arr = list(range(50))
# summa = 0
# print(arr)
# for i in arr:
#     summa += i
# else:
#     print(summa)
# print(sum(list(random.sample(range(50),20))))

# a = [1, 6, 2, 3,8]
# b = [1, 11, 3, 4]
# for i in a:
#     if i in b:
#         a.remove(i)
# else:
#     for x in b:
#         if x in a:
#             b.remove(x)
#     a.extend(b)
# print(a)

# a.extend(b)
# print(list(set(a)))