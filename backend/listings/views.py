from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Listing
from providers.models import Provider

@api_view(["POST"])
def create_listing(request):
    provider_id = request.data.get("provider_id")

    try:
        provider = Provider.objects.get(id=provider_id)
    except Provider.DoesNotExist:
        return Response(
            {"error": "Provider not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    listing = Listing.objects.create(
        provider=provider,
        title=request.data.get("title"),
        description=request.data.get("description"),
        price=request.data.get("price"),
        location=request.data.get("location"),
    )

    return Response(
        {"message": "Listing created successfully", "listing_id": listing.id},
        status=status.HTTP_201_CREATED
    )
