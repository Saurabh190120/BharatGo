from django.urls import path
from .views import create_listing,create_bus_listing

urlpatterns = [
    path("create/", create_listing),
    path("bus/create/", create_bus_listing),
]
