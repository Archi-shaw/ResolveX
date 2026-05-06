from django.http import FileResponse
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from app.tickets.models import Ticket
from .models import Attachment
from .serializers import AttachmentSerializer


class AttachmentAccessMixin:
    def get_ticket(self, ticket_id):
        return get_object_or_404(Ticket, id=ticket_id)

    def can_access_ticket(self, user, ticket):
        if user.role in ["ORG_ADMIN", "MANAGER"]:
            return ticket.organization_id == user.organization_id

        if user.role == "AGENT":
            return (
                ticket.organization_id == user.organization_id
                and ticket.assigned_to_id == user.id
            )

        return False

    def check_ticket_permission(self, request, ticket):
        if not self.can_access_ticket(request.user, ticket):
            return Response(
                {"detail": "You do not have permission to access this attachment."},
                status=status.HTTP_403_FORBIDDEN,
            )
        return None


class TicketAttachmentListCreateView(AttachmentAccessMixin, APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, ticket_id):
        ticket = self.get_ticket(ticket_id)

        denied = self.check_ticket_permission(request, ticket)
        if denied:
            return denied

        attachments = ticket.attachments.all()
        serializer = AttachmentSerializer(attachments, many=True)
        return Response(serializer.data)

    def post(self, request, ticket_id):
        ticket = self.get_ticket(ticket_id)

        denied = self.check_ticket_permission(request, ticket)
        if denied:
            return denied

        serializer = AttachmentSerializer(
            data=request.data,
            context={
                "request": request,
                "ticket": ticket,
            },
        )

        serializer.is_valid(raise_exception=True)
        attachment = serializer.save()

        return Response(
            AttachmentSerializer(attachment).data,
            status=status.HTTP_201_CREATED,
        )


class TicketAttachmentDownloadView(AttachmentAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, ticket_id, attachment_id):
        ticket = self.get_ticket(ticket_id)

        denied = self.check_ticket_permission(request, ticket)
        if denied:
            return denied

        attachment = get_object_or_404(
            Attachment,
            id=attachment_id,
            ticket=ticket,
        )

        return FileResponse(
            attachment.file.open("rb"),
            as_attachment=True,
            filename=attachment.original_name,
            content_type=attachment.content_type,
        )


class TicketAttachmentDeleteView(AttachmentAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, ticket_id, attachment_id):
        ticket = self.get_ticket(ticket_id)

        denied = self.check_ticket_permission(request, ticket)
        if denied:
            return denied

        attachment = get_object_or_404(
            Attachment,
            id=attachment_id,
            ticket=ticket,
        )

        attachment.file.delete(save=False)
        attachment.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)