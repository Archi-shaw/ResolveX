from django.urls import path

from .views import (
    TicketAttachmentListCreateView,
    TicketAttachmentDownloadView,
    TicketAttachmentDeleteView,
)

urlpatterns = [
    path(
        "tickets/<int:ticket_id>/attachments/",
        TicketAttachmentListCreateView.as_view(),
        name="ticket-attachment-list-create",
    ),
    path(
        "tickets/<int:ticket_id>/attachments/<int:attachment_id>/download/",
        TicketAttachmentDownloadView.as_view(),
        name="ticket-attachment-download",
    ),
    path(
        "tickets/<int:ticket_id>/attachments/<int:attachment_id>/",
        TicketAttachmentDeleteView.as_view(),
        name="ticket-attachment-delete",
    ),
]