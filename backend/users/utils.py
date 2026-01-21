from rest_framework_simplejwt.tokens import RefreshToken

def get_tokens_for_user(user):
    refresh = RefreshToken()

    refresh["user_id"] = user.id
    refresh["email"] = user.email

    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }

import random
from django.core.mail import send_mail
from .models import EmailOTP

def send_otp(email):
    otp = str(random.randint(100000, 999999))

    EmailOTP.objects.create(email=email, otp=otp)

    send_mail(
        subject="Your Email Verification OTP",
        message=f"Your OTP is {otp}. It is valid for 5 minutes.",
        from_email=None,
        recipient_list=[email],
        fail_silently=False,
    )
