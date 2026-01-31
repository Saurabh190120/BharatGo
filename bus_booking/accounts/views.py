from rest_framework import generics, permissions
from .serializers import RegisterSerializer
from .models import Provider
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


@api_view(['GET'])
@permission_classes([permissions.IsAdminUser])
def pending_providers(request):
    providers = Provider.objects.filter(is_approved=False)
    data = [{"id": p.id, "company": p.company_name, "user": p.user.username} for p in providers]
    return Response(data)


@api_view(['POST'])
@permission_classes([permissions.IsAdminUser])
def approve_provider(request, pk):
    provider = Provider.objects.get(id=pk)
    provider.is_approved = True
    provider.save()
    return Response({"message": "Provider approved"})
