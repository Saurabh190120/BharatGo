
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('users.urls')),
    path('providers', include('providers.urls')),
    path('admins', include('admins.urls')),
    path('payments', include('payments.urls')),
    path('reviews', include('reviews.urls')),
    path('listings', include('listings.urls')),
    # path('messages', include('messages.urls')),
]

