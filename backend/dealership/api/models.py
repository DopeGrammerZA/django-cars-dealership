from django.db import models
from django.contrib.auth.models import User

class Dealer(models.Model):
    name = models.CharField(max_length=200)
    state = models.CharField(max_length=2)
    city = models.CharField(max_length=100)
    address = models.TextField()

class Review(models.Model):
    dealer = models.ForeignKey(Dealer, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
