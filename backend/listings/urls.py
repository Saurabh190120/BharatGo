from django.urls import path
from .views import create_bus_listing

urlpatterns = [

    path("bus/create/", create_bus_listing),
]
