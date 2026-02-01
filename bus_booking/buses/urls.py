from django.urls import path
from .views import search_buses, seat_availability, add_bus, add_route, add_schedule, provider_buses

urlpatterns = [
    path('search/', search_buses),
    path('seats/<int:schedule_id>/', seat_availability),
    path('provider/bus/', add_bus),
    path('provider/route/', add_route),
    path('provider/schedule/', add_schedule),
    path('provider/buses/', provider_buses),



]
