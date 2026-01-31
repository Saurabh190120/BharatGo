from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Schedule, Route,Seat
from .serializers import BusSearchSerializer

@api_view(['GET'])
def search_buses(request):
    source = request.GET.get('source')
    destination = request.GET.get('destination')
    date = request.GET.get('date')

    routes = Route.objects.filter(source__iexact=source, destination__iexact=destination)
    schedules = Schedule.objects.filter(route__in=routes, date=date)

    serializer = BusSearchSerializer(schedules, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def seat_availability(request, schedule_id):
    seats = Seat.objects.filter(schedule_id=schedule_id)
    data = [{"seat": s.seat_number, "is_booked": s.is_booked} for s in seats]
    return Response(data)
