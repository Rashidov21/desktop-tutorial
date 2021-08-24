import sqlite3
#https://python-scripts.com/sqlite

conn = sqlite3.connect("base.db")  # или :memory: чтобы сохранить в RAM
cursor = conn.cursor()

# Создание таблицы
cursor.execute("""CREATE TABLE albums
                  (title text, artist text, release_date text,
                   publisher text, media_type text)
               """)


# Вставляем данные в таблицу
cursor.execute("""INSERT INTO albums
                  VALUES ('Glow', 'Andy Hunter', '7/24/2012',
                  'Xplore Records', 'MP3')"""
               )

# Сохраняем изменения
conn.commit()

# Вставляем множество данных в таблицу используя безопасный метод "?"
albums = [('Exodus', 'Andy Hunter', '7/9/2002', 'Sparrow Records', 'CD'),
          ('Until We Have Faces', 'Red', '2/1/2011', 'Essential Records', 'CD'),
          ('The End is Where We Begin', 'Thousand Foot Krutch', '4/17/2012', 'TFKmusic', 'CD'),
          ('The Good Life', 'Trip Lee', '4/10/2012', 'Reach Records', 'CD')]

cursor.executemany("INSERT INTO albums VALUES (?,?,?,?,?)", albums)
conn.commit()