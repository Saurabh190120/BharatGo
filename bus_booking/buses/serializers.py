from rest_framework import serializers
from .models import Bus, Schedule, Seat,Route

class BusSearchSerializer(serializers.ModelSerializer):
    bus_name = serializers.CharField(source='bus.bus_name')
    bus_type = serializers.CharField(source='bus.bus_type')

    class Meta:
        model = Schedule
        fields = [
            'id', 'bus_name', 'bus_type',
            'departure_time', 'arrival_time', 'price'
        ]

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = '__all__'
        read_only_fields = ['provider']

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
