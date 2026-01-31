from rest_framework import serializers
from .models import Bus, Schedule

class BusSearchSerializer(serializers.ModelSerializer):
    bus_name = serializers.CharField(source='bus.bus_name')
    bus_type = serializers.CharField(source='bus.bus_type')

    class Meta:
        model = Schedule
        fields = [
            'id', 'bus_name', 'bus_type',
            'departure_time', 'arrival_time', 'price'
        ]
