from rest_framework import serializers
from .models import User, Provider
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'role')

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            role=validated_data.get('role', 'USER')
        )
        user.set_password(validated_data['password'])
        user.save()

        if user.role == 'PROVIDER':
            Provider.objects.create(user=user, company_name="")

        return user
