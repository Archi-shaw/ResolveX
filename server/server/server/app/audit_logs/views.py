from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import AuditLog
from .serializers import AuditLogSerializer


class AuditLogAccessMixin:
    allowed_roles = ["ORG_ADMIN", "MANAGER"]

    def has_access(self, user):
        return getattr(user, "role", None) in self.allowed_roles

    def get_user_organization(self, user):
        return getattr(user, "organization", None)


class AuditLogListView(AuditLogAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not self.has_access(request.user):
            return Response(
                {"detail": "You do not have permission to view audit logs."},
                status=status.HTTP_403_FORBIDDEN,
            )

        organization = self.get_user_organization(request.user)

        logs = AuditLog.objects.filter(
            organization=organization,
        )

        serializer = AuditLogSerializer(logs, many=True)
        return Response(serializer.data)


class AuditLogDetailView(AuditLogAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        if not self.has_access(request.user):
            return Response(
                {"detail": "You do not have permission to view this audit log."},
                status=status.HTTP_403_FORBIDDEN,
            )

        organization = self.get_user_organization(request.user)

        try:
            log = AuditLog.objects.get(
                id=id,
                organization=organization,
            )
        except AuditLog.DoesNotExist:
            return Response(
                {"detail": "Audit log not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = AuditLogSerializer(log)
        return Response(serializer.data)