from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, OTPVerifySerializer
from django.contrib.auth.hashers import check_password
from .models import User,EmailOTP
from .serializers import LoginSerializer
from .utils import get_tokens_for_user
from datetime import timedelta
from django.utils.timezone import now

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"message": "OTP sent to email"},
            status=201
        )


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        if not check_password(password, user.password):
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_401_UNAUTHORIZED
            )
        if not user.is_verified:
            return Response(
        {"error": "Email not verified"},
        status=403
    )

        tokens = get_tokens_for_user(user)
        return Response(tokens, status=status.HTTP_200_OK)



class VerifyOTPView(APIView):
    def post(self, request):
        serializer = OTPVerifySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        otp = serializer.validated_data["otp"]

        try:
            record = EmailOTP.objects.filter(email=email, otp=otp).latest("created_at")
        except EmailOTP.DoesNotExist:
            return Response({"error": "Invalid OTP"}, status=400)

        if now() - record.created_at > timedelta(minutes=5):
            return Response({"error": "OTP expired"}, status=400)

        user = User.objects.get(email=email)
        user.is_verified = True
        user.save()

        EmailOTP.objects.filter(email=email).delete()

        return Response({"message": "Email verified successfully"})
