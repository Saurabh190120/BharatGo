from django.urls import path
from .views import RegisterView, pending_providers, approve_provider

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('providers/pending/', pending_providers),
    path('providers/approve/<int:pk>/', approve_provider),
]
