from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import BusListing
from providers.models import Provider

@api_view(["POST"])
def create_bus_listing(request):
    try:
        provider = Provider.objects.get(id=request.data["provider_id"])
    except Provider.DoesNotExist:
        return Response({"error": "Provider not found"}, status=404)

    BusListing.objects.create(
        provider=provider,
        bus_name=request.data["bus_name"],
        start_point=request.data["start_point"],
        end_point=request.data["end_point"],
        departure_time=request.data["departure_time"],
        arrival_time=request.data["arrival_time"],
        travel_date=request.data["travel_date"],
        total_seats=request.data["total_seats"],
        price_per_seat=request.data["price_per_seat"],
    )

    return Response(
        {"message": "Bus route created successfully"},
        status=status.HTTP_201_CREATED
    )
