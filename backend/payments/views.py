from django.shortcuts import render,HttpResponse

# Create your views here.
def payment_view(request):
    return HttpResponse("This is the payment view.")