from rest_framework.permissions import BasePermission


class IsOrgMember(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.organisation == request.user.organisation


class IsAdminOrManager(BasePermission):
    def has_permission(self, request, view):
        return request.user.role in ["ADMIN", "MANAGER"]


class IsAssignedAgent(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.assigned_to == request.user