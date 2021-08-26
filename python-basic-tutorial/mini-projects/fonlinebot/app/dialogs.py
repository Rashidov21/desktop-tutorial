from dataclasses import dataclass
from emoji import emojize


@dataclass(frozen=True)
class Messages:
    test: str = "Привет {name}. Работаю..."
    btn_online: str = f"{emojize(':soccer_ball:')} Онлайн"
    btn_config: str = f"{emojize(':memo:')} Настройки"
    start_new_user: str = "Привет. Я могу сообщать тебе результаты матчей online."
    start_current_user: str = "Привет. С возвращением! " \
                              "Используй команды или меню внизу для продолжения."
    help: str = """
    Этот бот получает результаты матчей за последние 48 часов.
    Включая режим LIVE.
    - Что бы выбрать/изменить лиги нажмите "Настройки".
    - Для проверки результатов нажмите "Онлайн".
    Бот создан в учебных целях, для сайта pythonru.com
    """
    league_row: str = "{i}. {flag} {name}"
    config: str = "Сейчас выбраны:\n{leagues}"
    btn_back: str = "<- Назад"
    btn_go: str = "Вперед ->"
    btn_save: str = "Сохранить"
    config_btn_edit: str = "Изменить"
    config_btn_delete: str = "Удалить данные"
    data_delete: str = "Данные успешно удалены"
    set_leagues: str = "Выбери 3 лиги для отслеживания.\nВыбраны:\n{leagues}"
    main: str = "Что будем делать?"
    db_saved: str = "Настройки сохранены"
    cb_not_saved: str = "Лиги не выбраны"
    cb_limit: str = "Превышен лимит. Максимум 3 лиги."
    results: str = "Все результаты за сегодя\n{matches}"
    no_results: str = "Сегодня нет матчей"
    update_results: str = "Обновить результаты"
    cb_updated: str = f"{emojize(':white_heavy_check_mark:')} Готово"
    unknown_text: str = "Ничего не понятно, но очень интересно.\nПопробуй команду /help"
    limit_control: str = "Лимит запросов исчерпан. Возвращайтесь завтра."
    fetch_error: str = "Ошибка получения данных, попробуйте позже."


msg = Messages()
