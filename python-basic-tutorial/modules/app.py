"""This is app"""
# import main
import random
from .main import version  # only version
from .main import *  # all items
from .main import version, NAME  # only versioon and NAME
print(version)  # 1.0

test = True
# print(random.sample("abcs", 2))
# main.show_info()
print(__name__)  # __main__

print(dir(random))

if __name__ == '__main__':
    print('Эта программа запущена сама по себе.')
else:
    print('Меня импортировали в другой модуль.')
