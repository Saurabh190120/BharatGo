from django.shortcuts import render,HttpResponse

# Create your views here.
def provider_list(request):
    return HttpResponse("Provider List View")   