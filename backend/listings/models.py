from django.db import models
from providers.models import Provider
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Listing(models.Model):
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
