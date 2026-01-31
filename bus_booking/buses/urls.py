from django.urls import path
from .views import search_buses, seat_availability

urlpatterns = [
    path('search/', search_buses),
    path('seats/<int:schedule_id>/', seat_availability),

]
