import logging

formatter = '[%(asctime)s] %(levelname)8s --- %(message)s (%(filename)s:%(lineno)s)'
logging.basicConfig(
    # TODO раскомментировать на сервере
    # filename=f'bot-from-{datetime.datetime.now().date()}.log',
    # filemode='w',
    format=formatter,
    datefmt='%Y-%m-%d %H:%M:%S',
    # TODO logging.WARNING
    level=logging.DEBUG
)


TOKEN = "1133552059:AAGZabDmcIcgpukOOo5ItHvYihEvuIMjiDE"
SOCCER_API_URL = "https://football-pro.p.rapidapi.com/api/v2.0/livescores"
SOCCER_API_HEADERS = {
    'x-rapidapi-key': "0202709d4emshbe87778ed9b4962p1f76cdjsn4a200e532763",
    'x-rapidapi-host': "football-pro.p.rapidapi.com"
}
SOCCER_API_PARAMS = {
    "tz": "Europe/Moscow",
    "include": "localTeam,visitorTeam"
}
BOT_VERSION = 0.3
# База данных хранит выбранные юзером лиги
BOT_DB_NAME = "users_leagues"
# Тестовые данные поддерживаемых лиг
BOT_LEAGUES = {
    "82": "Немецкая Бундеслига",
    "384": "Итальянская Серия А",
    "564": "Испанская Ла Лига",
    "462": "Португальская Примейра Лига",
    "72": "Чемпионат Нидерландов",
    "2": "Лига Чемпионов",
    "5": "Лига Европы",
    "8": "Английская Премьер-лига",
    "301": "Французская Лига 1",
    "486": "Российская Премьер-лига"
}
# Флаги для сообщений, emoji-код
BOT_LEAGUE_FLAGS = {
    "82": ":Germany:",
    "384": ":Italy:",
    "564": ":Spain:",
    "462": ":Portugal:",
    "72": ":Netherlands:",
    "2": ":European_Union:",
    "5": ":trophy:",
    "8": ":England:",
    "301": ":France:",
    "486": ":Russia:"
}

# Данные redis-клиента
REDIS_HOST = 'localhost'
REDIS_PORT = 6379
# По умолчанию пароля нет. Он будет на сервере
REDIS_PASSWORD = None

MINUTE = 60
YEAR = 60*60*24*366
