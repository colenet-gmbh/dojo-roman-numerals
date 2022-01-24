import unittest

from app import app


class ApplicationTest(unittest.TestCase):
    def test_should_get_valid_response(self):
        with app.test_client() as client:
            response = client.get('/')
            self.assertEqual(response.get_data(as_text=True), '42')
