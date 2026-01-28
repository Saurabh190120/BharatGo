from django.urls import path
from .views import create_listing

urlpatterns = [
    path("create/", create_listing),
]
