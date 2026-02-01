from django.urls import path
from .views import search_buses, seat_availability, add_bus, add_route

urlpatterns = [
    path('search/', search_buses),
    path('seats/<int:schedule_id>/', seat_availability),
    path('provider/bus/', add_bus),
    path('provider/route/', add_route),



]
