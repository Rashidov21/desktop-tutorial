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
f = "1."

s = 0
for i in range(5):
    s = float(f"{f}{i}") - float(f"{f}{i+1}")
    print(s)
    s = float(f"{f}{i+1}") + float(f"{f}{i+2}")
    print(s)

print(s)

arr = []
for i in range(1,5):
    arr.append(float("1.{}".format(i)))
print(arr)
for i in range(len(arr)):
    s = arr[i] - arr[i+1]
    print(s)
    s += arr[i+2]
    print(s)