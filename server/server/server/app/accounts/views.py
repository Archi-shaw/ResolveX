from typing import Any, cast

from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .permissions import IsAdminOrSuperUser
from .serializers import (
    LoginSerializers,
    UserListSerializer,
    UserRoleUpdateSerializer,
    UserUpdateSerializer,
)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializers(data=request.data)

        if serializer.is_valid():
            validated_data = cast(dict[str, Any], serializer.validated_data)
            user = validated_data["user"]

            refresh = RefreshToken.for_user(user)

            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "role": user.role,
                    "organisation": user.organisation.id if user.organisation else None,
                }
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminOrSuperUser]
    http_method_names = ["get", "patch", "post", "head", "options"]

    def get_queryset(self):
        user = self.request.user

        if user.is_superuser:
            return User.objects.all()

        if user.role == "ADMIN":
            return User.objects.filter(organisation=user.organisation)

        return User.objects.none()

    def get_serializer_class(self):
        if self.action in ["partial_update", "update"]:
            return UserUpdateSerializer

        if self.action == "role":
            return UserRoleUpdateSerializer

        return UserListSerializer

    @action(detail=True, methods=["patch"])
    def role(self, request, pk=None):
        target_user = self.get_object()

        serializer = UserRoleUpdateSerializer(
            target_user,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(UserListSerializer(target_user).data)

    @action(detail=True, methods=["post"])
    def activate(self, request, pk=None):
        target_user = self.get_object()
        target_user.is_active = True
        target_user.save(update_fields=["is_active"])

        return Response({"detail": "User activated successfully"})

    @action(detail=True, methods=["post"])
    def deactivate(self, request, pk=None):
        target_user = self.get_object()

        if target_user == request.user:
            return Response(
                {"detail": "You cannot deactivate yourself."},
                status=status.HTTP_400_BAD_REQUEST
            )

        target_user.is_active = False
        target_user.save(update_fields=["is_active"])

        return Response({"detail": "User deactivated successfully"})