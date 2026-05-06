from rest_framework.permissions import BasePermission


class IsOrgAdmin(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and getattr(request.user, "role", None) == "ORG_ADMIN"
        )


class IsManagerOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and getattr(request.user, "role", None) in ["ORG_ADMIN", "MANAGER"]
        )


class IsOrgMember(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and getattr(request.user, "organization", None) is not None
        )


class IsTicketOwnerOrAssigned(BasePermission):
    def has_object_permission(self, request, view, obj):
        user = request.user

        if getattr(user, "role", None) in ["ORG_ADMIN", "MANAGER"]:
            return obj.organization_id == user.organization_id

        return (
            getattr(user, "role", None) == "AGENT"
            and obj.assigned_to_id == user.id
        )