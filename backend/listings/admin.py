from django.contrib import admin
from . models import Listing,BusListing
# Register your models here.
admin.site.register(Listing),
admin.site.register(BusListing)
