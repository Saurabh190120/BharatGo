from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Schedule, Route
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
