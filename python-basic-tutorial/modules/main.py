"""This is main module"""

version = "1.0"
ID = 12332
NAME = "Main module"


def show_info():
    print(ID)
    print(NAME)
    print(version)


print(__name__)  # main

if __name__ == '__main__':
    print('Эта программа запущена сама по себе.')
else:
    print('Меня импортировали в другой модуль.')
