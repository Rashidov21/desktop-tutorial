import unittest
import aiohttp
import requests
from unittest import IsolatedAsyncioTestCase
import config
from database import cache, database
from app import bot, service


class TestDatabase(IsolatedAsyncioTestCase):
    async def test_crud(self):
        await database.insert_users(1111, "1 2 3")
        self.assertEqual(await database.select_users(1111), ('1 2 3',))
        await database.delete_users(1111)
        self.assertEqual(await database.select_users(1111), None)


class TestCache(unittest.TestCase):
    def test_connection(self):
        self.assertTrue(cache.ping())

    def test_response_type(self):
        cache.setex("test_type", 10, "Hello")
        response = cache.get("test_type")
        self.assertEqual(type(response), str)


class TestBot(IsolatedAsyncioTestCase):

    async def asyncSetUp(self):
        self.bot = bot.bot
        self.bot._session = aiohttp.ClientSession()

    async def test_bot_auth(self):
        bot_info = await self.bot.get_me()
        self.assertEqual(bot_info["username"], "FonlineBOT")

    async def asyncTearDown(self):
        await self.bot._session.close()


class TestService(IsolatedAsyncioTestCase):
    async def test_get_league_ids(self):
        ids = await service.get_league_ids("1111")
        self.assertEqual(type(ids), list)

    async def test_get_last_results(self):
        results = await service.get_last_results(["1", "2", "3"])
        self.assertEqual(type(results), list)

    def test_limit_control(self):
        test_data = {'x-ratelimit-requests-reset': "60",
                     'x-ratelimit-requests-remaining': "0"}
        service.limit_control(test_data)
        self.assertIsNotNone(cache.get("limit_control"))


class TestAPI(unittest.TestCase):
    def test_api_response(self):
        result = service.fetch_results()
        self.assertIsNotNone(result.get('data', None))

    def test_api_headers(self):
        config.SOCCER_API_PARAMS['leagues'] = ",".join(config.BOT_LEAGUES.keys())
        resp = requests.get(
            config.SOCCER_API_URL,
            headers=config.SOCCER_API_HEADERS,
            params=config.SOCCER_API_PARAMS
        )
        self.assertIsNotNone(resp.headers.get('x-ratelimit-requests-reset', None))


if __name__ == '__main__':
    unittest.main()
