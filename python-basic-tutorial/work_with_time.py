# time - vaqt uchun
# datetime - sana va vaqt uchun
# calendar - kalendar
# timeit - qisqa kod bolaklarini ishlash vaqtini tekshirish
import time
import datetime
import calendar
import locale
locale.setlocale(locale.LC_ALL, "UZ_uz")
# print(time.time())  # 1663409343.8259957
# print(type(time.localtime()))
# print(dir(time.localtime()))
# time.struct_time(tm_year=2022, tm_mon=9, tm_mday=17, tm_hour=15, tm_min=10, tm_sec=36, tm_wday=5, tm_yday=260, tm_isdst=0)

# print(time.localtime()[0])  # 2022
# print(time.localtime()[1])  # 9
# print(time.localtime()[2])  # 17
# print(time.localtime()[3])  # 15 - soat
# print(time.localtime()[4])  # 13 - min
# print(time.localtime()[5])  # 13 - sec

# print(time.strftime("%d.%m.%Y"))  # 17.09.2022
# print(time.strftime("%H.%M.%S"))  # 15.15.20

# %y - 22
# %Y - 2022
# %m - oy raqami
# %b - oy nomi qisqacha
# %B - oy nomi
# %d - kun raqami 01 / 31
# %j - kun raqami yil bo'yicha
# %w - hafta raqami
# %a - haftada kun nomi qisqacha
# %A - haftada kun nomi
# %H - soat
# %M - minut
# %S - sekund
# %I - 12 soatlik format
# %x - hafta kun soat toliq
# local_time = f"Bugun : %A , %d - %B , %Y - yil. \nSoat %H:%M:%S"
# Bugun : Saturday , 17 - September , 2022 - yil.
# print(time.strftime(local_time))
# locale dan keyin
# Bugun : shanba , 17 - Sentabr , 2022 - yil.

# for i in range(5):
#     time.sleep(2)
#     print(i)

# datetime
# t1 = datetime.timedelta(days=2, hours=1, minutes=23)
# t2 = datetime.timedelta(days=1, hours=1, minutes=0)

# print(t1-t2)  # 1 day, 0:23:00

# date
# print(datetime.date.today())  # 2022-09-17

# time
# t = datetime.time(hour=1, minute=23, second=56)
# print(repr(t))  # datetime.time(1, 23, 56)
# print(str(t))  # 01:23:56

# datetime.datetime

# print(datetime.datetime(2022, 9, 17, 15, 32))
# # 2022-09-17 15:32:00


# print(datetime.datetime.now())

# now = datetime.datetime.now()
# b_day = datetime.datetime(year=1995, month=10, day=30, hour=12, minute=0)
# print(now - b_day)  # 9819 days, 3:49:37.614627

# calendar
# c = calendar.LocaleTextCalendar(0, "UZ_uz")
# print(c.formatyear(2022))

# # print(html_calendar.formatyear(2022))
import calendar
html_calendar = calendar.LocaleHTMLCalendar(0, "UZ_uz")
with open("calendar.html", "a", encoding="utf-8") as file:
    html = f"""
        <html>
            <head>
                <title>Calendar 2022</title>
            </head>
            <body>
                {str(html_calendar.formatyear(2022))}
            </body>
        </html>
    """
    file.write(html)
