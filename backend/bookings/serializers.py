from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    listing_title = serializers.CharField(source="listing.title", read_only=True)

    class Meta:
        model = Booking
        fields = "__all__"
