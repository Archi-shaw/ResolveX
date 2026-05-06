from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import FeatureFlag
from .serializers import FeatureFlagSerializer
from .services import enable_feature, disable_feature


class FeatureFlagAccessMixin:
    admin_role = "ORG_ADMIN"
    manager_role = "MANAGER"

    def get_organization(self, user):
        return getattr(user, "organization", None)

    def can_view(self, user):
        return getattr(user, "role", None) in [
            self.admin_role,
            self.manager_role,
        ]

    def can_manage(self, user):
        return getattr(user, "role", None) == self.admin_role

    def get_queryset(self, request):
        return FeatureFlag.objects.filter(
            organization=self.get_organization(request.user)
        )

    def get_flag(self, request, id):
        try:
            return self.get_queryset(request).get(id=id)
        except FeatureFlag.DoesNotExist:
            return None


class FeatureFlagListCreateView(FeatureFlagAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not self.can_view(request.user):
            return Response(
                {"detail": "You do not have permission to view feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        flags = self.get_queryset(request)
        serializer = FeatureFlagSerializer(flags, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not self.can_manage(request.user):
            return Response(
                {"detail": "Only organization admins can create feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = FeatureFlagSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        flag = serializer.save(
            organization=request.user.organization,
            created_by=request.user,
        )

        return Response(
            FeatureFlagSerializer(flag).data,
            status=status.HTTP_201_CREATED,
        )


class FeatureFlagDetailView(FeatureFlagAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id):
        if not self.can_view(request.user):
            return Response(
                {"detail": "You do not have permission to view feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        flag = self.get_flag(request, id)

        if not flag:
            return Response(
                {"detail": "Feature flag not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(FeatureFlagSerializer(flag).data)

    def patch(self, request, id):
        if not self.can_manage(request.user):
            return Response(
                {"detail": "Only organization admins can update feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        flag = self.get_flag(request, id)

        if not flag:
            return Response(
                {"detail": "Feature flag not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = FeatureFlagSerializer(
            flag,
            data=request.data,
            partial=True,
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def delete(self, request, id):
        if not self.can_manage(request.user):
            return Response(
                {"detail": "Only organization admins can delete feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        flag = self.get_flag(request, id)

        if not flag:
            return Response(
                {"detail": "Feature flag not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        flag.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class FeatureFlagEnableView(FeatureFlagAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, id):
        if not self.can_manage(request.user):
            return Response(
                {"detail": "Only organization admins can enable feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        flag = self.get_flag(request, id)

        if not flag:
            return Response(
                {"detail": "Feature flag not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        flag = enable_feature(flag)

        return Response(FeatureFlagSerializer(flag).data)


class FeatureFlagDisableView(FeatureFlagAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, id):
        if not self.can_manage(request.user):
            return Response(
                {"detail": "Only organization admins can disable feature flags."},
                status=status.HTTP_403_FORBIDDEN,
            )

        flag = self.get_flag(request, id)

        if not flag:
            return Response(
                {"detail": "Feature flag not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        flag = disable_feature(flag)

        return Response(FeatureFlagSerializer(flag).data)