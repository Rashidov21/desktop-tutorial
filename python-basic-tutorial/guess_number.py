import random

myNum = random.randint(0, 10)
while True:
    num = int(input("Son ? \n:"))
    if num == myNum:
        break
    if num > myNum:
        print("Katta")
    elif num < myNum:
        print("Kichik")
print("Topting")

