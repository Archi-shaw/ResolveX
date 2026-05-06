from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404

from app.tickets.models import Ticket
from .models import Comment
from .serializer import CommentSerializer
from .permissions import CanEditOrDeleteComment


class TicketCommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_ticket(self):
        return get_object_or_404(Ticket, id=self.kwargs["ticket_id"])

    def check_ticket_permission(self, ticket):
        user = self.request.user
        role = getattr(user, "role", None)

        if role in ["ADMIN", "MANAGER"]:
            if ticket.organisation != user.organisation:
                raise PermissionDenied("You cannot access this ticket.")
            return

        if role == "AGENT":
            if ticket.assigned_to != user:
                raise PermissionDenied("You can only access assigned tickets.")
            return

        raise PermissionDenied("You do not have permission.")

    def get_queryset(self):
        ticket = self.get_ticket()
        self.check_ticket_permission(ticket)
        return Comment.objects.filter(ticket=ticket)

    def perform_create(self, serializer):
        ticket = self.get_ticket()
        self.check_ticket_permission(ticket)
        serializer.save(ticket=ticket, user=self.request.user)


class TicketCommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated, CanEditOrDeleteComment]
    http_method_names = ["patch", "delete", "head", "options"]

    def get_queryset(self):
        return Comment.objects.filter(ticket_id=self.kwargs["ticket_id"])

    def get_object(self):
        obj = get_object_or_404(
            self.get_queryset(),
            id=self.kwargs["comment_id"]
        )

        self.check_object_permissions(self.request, obj)
        return obj