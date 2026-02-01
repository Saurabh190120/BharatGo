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



from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from accounts.permissions import IsProvider
from .serializers import BusSerializer, RouteSerializer
from .models import Bus

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsProvider])
def add_bus(request):
    serializer = BusSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(provider=request.user.provider)
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsProvider])
def add_route(request):
    serializer = RouteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)
