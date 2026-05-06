from rest_framework import serializers
from .models import Invitation

class InviteSerializer(serializers.Serializer):
    email = serializers.EmailField()
    role = serializers.CharField(max_length=50)


class InvitationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation
        id = [
            "id",
            "email",
            "role",
            "status",
            "expires_at",
            "created_at",
        ]


class AcceptInviteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    phone = serializers.CharField(max_length=20, required=False, allow_blank=True)
    password = serializers.CharField(write_only=True, min_length=8)