from django.shortcuts import render,HttpResponse

def message(request):
    return HttpResponse("This is the message view.")
