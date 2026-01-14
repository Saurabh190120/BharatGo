from django.urls import path
from . import views 
urlpatterns = [
    path('', views.provider_list, name='provider-list'),
]