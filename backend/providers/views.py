from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Provider
from listings.models import Listing
from bookings.models import Booking

@api_view(["GET"])
def provider_dashboard(request, provider_id):
    provider = Provider.objects.get(id=provider_id)

    listings = Listing.objects.filter(provider=provider)
    bookings = Booking.objects.filter(listing__provider=provider)

    return Response({
        "total_listings": listings.count(),
        "total_bookings": bookings.count(),
        "listings": [
            {
                "id": l.id,
                "title": l.title,
                "price": l.price,
                "location": l.location
            } for l in listings
        ]
    })
