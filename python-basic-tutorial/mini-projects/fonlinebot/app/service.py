import requests
import logging
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, \
                          InlineKeyboardMarkup, InlineKeyboardButton
from emoji import emojize
from config import BOT_LEAGUES, BOT_LEAGUE_FLAGS, MINUTE, \
                   SOCCER_API_URL, SOCCER_API_HEADERS, SOCCER_API_PARAMS
from database import cache, database as db
from app.dialogs import msg


MAIN_KB = ReplyKeyboardMarkup(
    resize_keyboard=True,
    one_time_keyboard=True
).row(
    KeyboardButton(msg.btn_online),
    KeyboardButton(msg.btn_config)
)

CONFIG_KB = InlineKeyboardMarkup().row(
    InlineKeyboardButton(msg.btn_back, callback_data='main_window'),
    InlineKeyboardButton(msg.config_btn_edit, callback_data='edit_config#')
).add(InlineKeyboardButton(msg.config_btn_delete, callback_data='delete_config'))


def leagues_kb(active_leagues: list, offset: int = 0):
    kb = InlineKeyboardMarkup()
    league_keys = list(BOT_LEAGUES.keys())[0+offset:5+offset]
    for lg_id in league_keys:
        if lg_id in active_leagues:
            kb.add(InlineKeyboardButton(
                f"{emojize(':white_heavy_check_mark:')} {BOT_LEAGUES[lg_id]}",
                callback_data=f'del_league_#{offset}#{lg_id}'
            ))
        else:
            kb.add(InlineKeyboardButton(
                BOT_LEAGUES[lg_id],
                callback_data=f'add_league_#{offset}#{lg_id}'
            ))
    kb.row(
        InlineKeyboardButton(
            msg.btn_back if offset else msg.btn_go,
            callback_data='edit_config#0' if offset else 'edit_config#5'),
        InlineKeyboardButton(msg.btn_save, callback_data='save_config')
    )
    return kb


def results_kb(leagues: list):
    params = [f'#{lg}' for lg in leagues]
    kb = InlineKeyboardMarkup()
    kb.add(InlineKeyboardButton(
        msg.update_results,
        callback_data=f"update_results{''.join(params)}"
    ))
    return kb


async def get_league_ids(user_id: str) -> list:
    """Функция получает id лиг пользователя в базе данных"""
    leagues = cache.lrange(f'u{user_id}', 0, -1)
    if leagues is None:
        leagues = await db.select_users(user_id)
        if leagues is not None:
            leagues = leagues.split(",")
            [cache.lpush(f'u{user_id}', lg_id) for lg_id in leagues]
        else:
            return []
    return leagues


async def get_league_names(ids: list) -> str:
    """Функция собирает сообщение с названиями лиг из id"""
    leagues_text = ""
    for i, lg_id in enumerate(ids, start=1):
        if i != 1:
            leagues_text += "\n"
        leagues_text += msg.league_row.format(
            i=i,
            flag=emojize(BOT_LEAGUE_FLAGS.get(lg_id, "-")),
            name=BOT_LEAGUES.get(lg_id, "-")
        )
    return leagues_text


def update_leagues(user_id: str, data: str):
    """Функция добаляет или удаляет id лиги для юзера"""
    league_id = data.split("#")[-1]  # data ~ add_league_#5#345
    if data.startswith("add"):
        cache.lpush(f'u{user_id}', league_id)
    else:
        cache.lrem(f'u{user_id}', 0, league_id)


async def generate_results_answer(ids: list) -> str:
    """Функция создaет сообщение для вывода результатов матчей"""
    limit = cache.get("limit_control")
    if limit is not None:
        return limit

    results = await get_last_results(ids)
    if results == [[]]*len(ids):
        return msg.no_results
    elif msg.fetch_error in results:
        return msg.fetch_error
    else:
        text_results = results_to_text(results)
        return msg.results.format(matches=text_results)


def limit_control(headers):
    """Контроль бесплатного лимита запросов"""
    if headers.get("x-ratelimit-requests-remaining") is None:
        logging.error(f"Invalid headers response {headers}")

    if int(headers['x-ratelimit-requests-remaining']) <= 5:
        cache.setex(
            "limit_control",
            int(headers['x-ratelimit-requests-reset']),
            msg.limit_control
        )


def fetch_results() -> dict:
    SOCCER_API_PARAMS['leagues'] = ",".join(BOT_LEAGUES.keys())
    try:
        resp = requests.get(SOCCER_API_URL,
                            headers=SOCCER_API_HEADERS,
                            params=SOCCER_API_PARAMS)
    except requests.ConnectionError:
        logging.error("ConnectionError")
        return {"error": "ConnectionError"}

    limit_control(resp.headers)
    if resp.status_code == 200:
        return resp.json()
    else:
        logging.warning(f"Data retrieval error [{resp.status_code}]. Headers: {resp.headers} ")
        return {"error": resp.status_code}


async def parse_matches() -> dict:
    """Функция сбора матчей по API"""
    data = {}
    matches = fetch_results()
    if matches.get("error", False):
        return matches

    for m in matches['data']:
        if not data.get(str(m['league_id']), False):
            data[str(m['league_id'])] = [m]
        else:
            data[str(m['league_id'])].append(m)
    return data


async def save_results(matches: dict):
    """Сохранение результатов матчей"""
    for lg_id in BOT_LEAGUES.keys():
        cache.jset(lg_id, matches.get(lg_id, []), MINUTE)


async def get_last_results(league_ids: list) -> list:
    last_results = [cache.jget(lg_id) for lg_id in league_ids]
    if None in last_results:
        all_results = await parse_matches()
        if all_results.get("error", False):
            return [msg.fetch_error]
        else:
            await save_results(all_results)
            last_results = [all_results.get(lg_id, []) for lg_id in league_ids]
    return last_results


def add_text_time(time: dict) -> str:
    """Подбор текста в зависимости от статуса матча
    Все статусы здесь:
    https://sportmonks.com/docs/football/2.0/getting-started/a/response-codes/85#definitions
    """
    scheduled = ["NS"]
    ended = ["FT", "AET", "FT_PEN"]
    live = ["LIVE", "HT", "ET", "PEN_LIVE"]

    if time['status'] in scheduled and time['starting_at']['time'] is not None:
        # обрезаем секунды
        return time['starting_at']['time'][:-3]
    elif time['status'] in ended:
        return "Окончен"
    elif time['status'] in live and time['minute'] is not None:
        if time['extra_minute'] is not None:
            return time['minute'] + time['extra_minute']
        return time['minute']
    else:
        # для других статусов возвращаем заглушку
        return "--:--"


def results_to_text(matches: list) -> str:
    """
    Функция генерации сообщения с матчами
    Получает list[list[dict]]]
    Возвращает текст:
    | Английская Премьер-лига           |
    | Окончен Тоттенхэм 0:1 (0:1) Челси |
    ...
    """

    text = ""
    for lg_matches in matches:
        if not lg_matches:
            continue

        lg_flag = BOT_LEAGUE_FLAGS[str(lg_matches[0]['league_id'])]
        lg_name = BOT_LEAGUES[str(lg_matches[0]['league_id'])]
        text += f"{emojize(lg_flag)} {lg_name}\n"
        for m in lg_matches:
            text += f"{add_text_time(m['time']):>7} "
            if m['localteam_id'] == m['winner_team_id']:
                text += f"*{m['localTeam']['data']['name']}* "
            else:
                text += f"{m['localTeam']['data']['name']} "
            if m['time']['minute'] is not None:
                text += f"{m['scores']['localteam_score']}-{m['scores']['visitorteam_score']} "
            else:
                text += "— "
            if m['scores']['ht_score'] is not None:
                text += f"{m['scores']['ht_score']} "
            if m['visitorteam_id'] == m['winner_team_id']:
                text += f"*{m['visitorTeam']['data']['name']}*\n"
            else:
                text += f"{m['visitorTeam']['data']['name']}\n"
        text += "\n"
    return text
