from django.urls import path
from .views import search_buses, seat_availability, add_bus

urlpatterns = [
    path('search/', search_buses),
    path('seats/<int:schedule_id>/', seat_availability),
    path('provider/bus/', add_bus),


]
