from rest_framework.permissions import BasePermission

class IsProvider(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.role == 'PROVIDER'
            and hasattr(request.user, 'provider')
            and request.user.provider.is_approved
        )
