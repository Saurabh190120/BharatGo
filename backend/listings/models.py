from django.db import models
from providers.models import Provider

class BusListing(models.Model):
    provider = models.ForeignKey(
        Provider,
        on_delete=models.CASCADE,
        related_name="bus_listings"
    )

    bus_name = models.CharField(max_length=100)
    start_point = models.CharField(max_length=100)
    end_point = models.CharField(max_length=100)

    departure_time = models.TimeField()
    arrival_time = models.TimeField()

    travel_date = models.DateField()

    total_seats = models.IntegerField()
    price_per_seat = models.DecimalField(max_digits=8, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.bus_name} ({self.start_point} → {self.end_point})"
