import sqlite3
conn = sqlite3.connect("bot_users.db", check_same_thread=False)
# cursor = conn.cursor()
def create_DB_cursor():
	cursor = conn.cursor()
	return cursor
# cursor.execute("""CREATE TABLE users
#                   (user_id text, username text, first_name text,
#                    last_name text, bio text,phone text)
#                """)

TOKEN = "1208478917:AAHtOVDa5PoWDl_l9IDZbU_lFThTMp98eJc"
MY_ID = 668618297
DB_FILENAME = 'db_bot.db'