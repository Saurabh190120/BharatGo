from django.shortcuts import render,HttpResponse

# Create your views here.
def listings(request):
    return HttpResponse("Listings Page")