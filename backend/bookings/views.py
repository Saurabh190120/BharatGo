# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .models import Booking
# from .serializers import BookingSerializer

# @api_view(["POST"])
# def create_booking(request):
#     serializer = BookingSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save(user=request.user)
#         return Response(serializer.data)
#     return Response(serializer.errors, status=400)

# @api_view(["GET"])
# def my_bookings(request):
#     bookings = Booking.objects.filter(user=request.user)
#     serializer = BookingSerializer(bookings, many=True)
#     return Response(serializer.data)

