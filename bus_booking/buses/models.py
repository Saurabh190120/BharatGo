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

class Schedule(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    date = models.DateField()
    departure_time = models.TimeField()
    arrival_time = models.TimeField()
    price = models.DecimalField(max_digits=8, decimal_places=2)


class Seat(models.Model):
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=5)
    is_booked = models.BooleanField(default=False)
