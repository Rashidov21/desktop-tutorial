# open()

# f = open("./test.txt", "r", encoding='utf-8')
# # print(f)
# # <_io.TextIOWrapper name='test.txt' mode='r' encoding='utf-8'>
# # print(type(f))  # <class '_io.TextIOWrapper'>
# # print(dir(f))

# print(f.read())
# # print(f.readlines())
# f.write('python')

# f.close()

# r - faqat o'qish
# r+ - o'qish va yozish
# w - yozish
# w+ - oqish va yozish (agar file bolmasa u automatik xosil qilinadi)
# a - yozish
# a+ -yozish va o'qish
# x - yozish uchun  file xosil qilish
# b- binar rejim (001010100)
# file = open("test.txt", 'r')
# for line in file.readline():
#     print(line)

for line in range(6):
    f.write(f"{line}\n") # type: ignore
