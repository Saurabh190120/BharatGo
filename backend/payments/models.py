from django.db import models
from bookings.models import Booking
# Create your models here.
class Payment(models.Model):
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    payment_date = models.DateTimeField(auto_now_add=True)
