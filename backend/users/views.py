from django.shortcuts import render, HttpResponse

# Create your views here.
def users_dashboard(request):
    return HttpResponse("Welcome to the Users Dashboard")