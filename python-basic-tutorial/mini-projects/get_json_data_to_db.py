import requests
import json
import sqlite3
import pprint


# def create_db():
#     con = sqlite3.connect("./posts.db")
#     cur = con.cursor()
#     try:
#         cur.execute(
#             """CREATE TABLE posts(
#              id INTEGER PRIMARY KEY,
#              title TEXT,
#              body TEXT);"""
#         )
#     except sqlite3.DatabaseError as e:
#         print(e)
#     else:
#         con.commit()
#         cur.close()
#         con.close()
#         print("Success")


def write_to_db(id, title, body):
    DONED = False
    con = sqlite3.connect('./posts.db')
    cur = con.cursor()
    try:
        cur.execute(
            f"""INSERT INTO posts
        VALUES({id},'{title}','{body}');"""
        )
    except sqlite3.DatabaseError as e:
        print(e)
    else:
        con.commit()
        cur.close()
        con.close()
        print(f"SUCCESS from id : {id}")
        DONED = True
    return DONED


url = "https://jsonplaceholder.typicode.com/posts"

# requests.get - metodi ko'rsatilgan url ga http so'rov yuborib Response obyekt
# namunasini qaytaradi
# print(page.status_code)  # http status code
page = requests.get(url)


# json.loads() - json tipini python tipiga (dict) olib o'tadi
data = json.loads(page.content)
# page.content - json ko'rinishida ma'lumotlarni  data o'zgaruvchisida oddiy list
# ko'rinishiga o'tqazish
for item in data:
    post_id = int(item.get('id'))
    title = item.get("title")
    body = item.get("body")
    if not write_to_db(post_id, title, body):
        continue
else:
    print("TUGADI !")

    # item o'zgaruvchisida har bir post dict turida iteratsiya qilinadi
    # pprint - bu chiroyli chop etish uchun alohida standart modul
    # pprint.pprint(item)
    # print(item.get("body"))
    # print(item.get("title"))
# task

# https://jsonplaceholder.typicode.com/todos - todo larni olib posts.db fayliga
# todos table siga yozing
c
