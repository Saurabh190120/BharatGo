from django.db import models
from accounts.models import Provider

class Route(models.Model):
    source = models.CharField(max_length=50)
    destination = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.source} → {self.destination}"


class Bus(models.Model):
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE)
    bus_name = models.CharField(max_length=100)
    bus_type = models.CharField(max_length=20)  # AC / NON-AC / SLEEPER
    total_seats = models.IntegerField()

    def __str__(self):
        return self.bus_name
