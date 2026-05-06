from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, permissions

from .models import Ticket
from .serializers import TicketSerializer


class TicketViewSet(ModelViewSet):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.is_superuser:
            return Ticket.objects.all()

        if user.role in ["ADMIN", "MANAGER"]:
            return Ticket.objects.filter(organisation=user.organisation)

        if user.role == "AGENT":
            return Ticket.objects.filter(
                organisation=user.organisation,
                assigned_to=user
            )

        return Ticket.objects.filter(
            organisation=user.organisation,
            created_by=user
        )

    def perform_create(self, serializer):
        serializer.save(
            created_by=self.request.user,
            organisation=self.request.user.organisation
        )

    # 🔥 ASSIGN
    @action(detail=True, methods=["post"])
    def assign(self, request, pk=None):
        ticket = self.get_object()

        if request.user.role not in ["ADMIN", "MANAGER"]:
            return Response({"error": "Permission denied"}, status=403)

        user_id = request.data.get("assigned_to")
        ticket.assigned_to_id = user_id
        ticket.save()

        return Response({"message": "Ticket assigned"})

    # 🔥 START
    @action(detail=True, methods=["post"])
    def start(self, request, pk=None):
        ticket = self.get_object()
        ticket.status = "IN_PROGRESS"
        ticket.save()
        return Response({"message": "Ticket started"})

    # 🔥 RESOLVE
    @action(detail=True, methods=["post"])
    def resolve(self, request, pk=None):
        ticket = self.get_object()
        ticket.status = "RESOLVED"
        ticket.save()
        return Response({"message": "Ticket resolved"})

    # 🔥 CLOSE
    @action(detail=True, methods=["post"])
    def close(self, request, pk=None):
        ticket = self.get_object()
        ticket.status = "CLOSED"
        ticket.save()
        return Response({"message": "Ticket closed"})

    @action(detail=True, methods=["post"])
    def reopen(self, request, pk=None):
        ticket = self.get_object()
        ticket.status = "OPEN"
        ticket.save()
        return Response({"message": "Ticket reopened"})