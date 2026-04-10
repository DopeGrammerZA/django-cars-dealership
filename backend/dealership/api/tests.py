from django.test import TestCase
from django.urls import reverse

class ApiTests(TestCase):
    def test_get_dealers(self):
        response = self.client.get('/api/dealers/')
        self.assertEqual(response.status_code, 200)
