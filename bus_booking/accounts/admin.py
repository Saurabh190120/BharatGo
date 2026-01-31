from django.contrib import admin

# Register your models here.
from .models import User, Provider  
admin.site.register(User)
admin.site.register(Provider)