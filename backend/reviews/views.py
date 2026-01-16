from django.shortcuts import render,HttpResponse

# Create your views here.
def review_view(request):
    return HttpResponse("This is the review view.")