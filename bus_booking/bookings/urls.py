from django.urls import path
from .views import create_booking, provider_bookings

urlpatterns = [
    path('create/', create_booking),
    path('provider/bookings/', provider_bookings),

]
