from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Booking
from buses.models import Seat, Schedule

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_booking(request):
    schedule_id = request.data['schedule_id']
    seats = request.data['seats']  # ["A1", "A2"]

    schedule = Schedule.objects.get(id=schedule_id)

    total_amount = len(seats) * schedule.price

    for seat_no in seats:
        seat = Seat.objects.get(schedule=schedule, seat_number=seat_no)
        if seat.is_booked:
            return Response({"error": "Seat already booked"}, status=400)
        seat.is_booked = True
        seat.save()

    booking = Booking.objects.create(
        user=request.user,
        schedule=schedule,
        seat_numbers=",".join(seats),
        total_amount=total_amount,
        status="CONFIRMED"
    )

    return Response({"message": "Booking successful", "booking_id": booking.id})

from rest_framework.permissions import IsAuthenticated
from accounts.permissions import IsProvider
from buses.models import Schedule

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsProvider])
def provider_bookings(request):
    schedules = Schedule.objects.filter(bus__provider=request.user.provider)
    bookings = Booking.objects.filter(schedule__in=schedules)

    data = []
    for b in bookings:
        data.append({
            "user": b.user.username,
            "bus": b.schedule.bus.bus_name,
            "seats": b.seat_numbers,
            "amount": b.total_amount,
            "date": b.booked_at
        })

    return Response(data)
