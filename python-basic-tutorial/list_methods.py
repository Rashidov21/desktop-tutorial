# arr = [1,2,3,4]
# arr.append(5)# oxiriga qoshish
# arr.extend([5,6,7]) # listni boshqa list bilan kengaytirish
# arr.insert(0,0) # siz korsatgan indeks boyicha element qoshish
# arr.pop(3) # siz korsatgan indeks boyicha elem ochiradi
# arr.pop() # oxirgi elementni ochiradi
# del arr[-1] # indeks boyicha ochiriladi
# arr.remove(1) # siz korsatgan elementni ochiradi
# s = "helllo"
# s = list(s)
# s.remove("l")
# print(s)
# arr.clear() # listni butunlay tozalaydi == []
# print(arr)
# nums = [2,6,7,8,9,12,2,23,56,78,2]
# print(2 in nums) # True
# print(200 in nums) # False

# s = "helllo"
# s = list(s)
# print("o" in s) # True
# nums = [2,6,7,8,9,12,2,23,56,78]
# print(nums.count(2)) # siz korsatgan element nechi marta ishtirok etganini int qiymatda qaytaradi
# print(max(nums)) # eng katta qiymatni olamiz
# print(min(nums)) # eng kichik qiymatni olamiz
# anyArray = [0,False, None,1]
# print(any(anyArray)) #  any() list ichida bir dona bolsa ham True qiymat mavjud bolsa qaytaradi, aks holda False
# print(all(nums)) # all() list ichida barcha elem lar True qiymaitda bosa True qaytaradi aks holda False
# nums.reverse() # list elemlarini teskari qiladi
# print(nums)
# r = []
# for i in reversed(nums):
#     r.append(i)
# r = [i for i in reversed(nums)] # reversed() massivni qabul qiladi va uni teskari holatga olib otadi
# print(r)

# arr = [9,7,5,3,1,4,2]
# arr.sort(key=Parametr,reverse=Teskari qilib)
# # arr.sort() # listni tartib boyicha saralash
# arr.sort(reverse=True) # yuqoridan pastga qarab saralash
# print(arr)
# arr = ["Hello", "HELLO1", "hello","hello1","HELLO2"]
# arr.sort(key=str.lower)
# for i in arr:
#     print(i, end="")
# s = sorted(arr,key=None,reverse=False)
# print(s)
# import random
# n = list(range(0,11))
# # for i in range(0,11):
# #     n.append(i)
# # print(n)
# print(random.sample(n,3))


# task 30 C++
# arr = [2,4,3,1,5,9]
# for i in range(len(arr)):
#     n1 = arr[i] # arr[0] >> 2
#     n2 = arr[i+1] # arr[1] >> 4
#     if n2 == arr[-1]:
#         break
#     if n1 < n2:
#         print(True)
#     else:
#         print(False)

# task 1
# nums = [2,6,7,8,9]
# input:nums = [2,6,7,8,9]
# output: nums[0] == 2 >>
# 2x1=2
# 2x2=4
# ....

# task 2
# nums = list(range(0,50))
# input: user int numbers , start,stop step, >> 2,6,2
# output:[7,9,2]

# task 3

# input: s = ["assalomu", "Alaykum12", 'VaAlayKUm55', "AssaLOM23"]
# ouput : necha katta harf bor, nechta son va nechta kichkina harf bor


# task 4
# input: user try 1 >> 2,7 = 9 user1 points = 9
# user try 2 >> 1, 4 = 5 user1 points = 14
#
# user2 try >> ....
# output:
# 3 -etap user1 points = 14 , user2 points=5
# winner = user1

# task 5
# chat bot yozish