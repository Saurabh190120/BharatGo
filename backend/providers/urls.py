from django.urls import path
from .views import provider_dashboard

urlpatterns = [
    path("dashboard/<int:provider_id>/", provider_dashboard),
]
