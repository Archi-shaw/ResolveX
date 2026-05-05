from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User


class LoginSerializers(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        user = authenticate(
            username=attrs["email"],
            password=attrs["password"]
        )

        if not user:
            raise serializers.ValidationError("Invalid credentials")

        if not user.is_active:
            raise serializers.ValidationError("User is not active")

        attrs["user"] = user
        return attrs


class UserListSerializer(serializers.ModelSerializer):
    organisation = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "name",
            "phone",
            "role",
            "is_active",
            "organisation",
            "date_joined",
        ]


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["name", "phone"]


class UserRoleUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["role"]

    def validate_role(self, role):
        allowed_roles = ["ADMIN", "MANAGER", "AGENT", "USER"]
        if role not in allowed_roles:
            raise serializers.ValidationError("Invalid role")
        return role