from rest_framework.permissions import BasePermission


class CanAccessTicketComments(BasePermission):
    def has_object_permission(self, request, view, obj):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        role = getattr(user, "role", None)

        if role in ["ADMIN", "MANAGER"]:
            return obj.ticket.organization == user.organization

        if role == "AGENT":
            return obj.ticket.assigned_to == user

        return False


class CanEditOrDeleteComment(BasePermission):
    def has_object_permission(self, request, view, obj):
        user = request.user

        if request.method in ["PATCH", "PUT"]:
            return obj.user == user

        if request.method == "DELETE":
            if getattr(user, "role", None) == "ADMIN":
                return obj.ticket.organization == user.organization
            return obj.user == user

        return True