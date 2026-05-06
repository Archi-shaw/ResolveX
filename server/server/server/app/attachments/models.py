from django.conf import settings
from django.db import models


def ticket_attachment_upload_path(instance, filename):
    return f"tickets/{instance.ticket_id}/attachments/{filename}"


class Attachment(models.Model):
    ticket = models.ForeignKey(
        "tickets.Ticket",
        on_delete=models.CASCADE,
        related_name="attachments",
    )
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="uploaded_attachments",
    )
    file = models.FileField(upload_to=ticket_attachment_upload_path)
    original_name = models.CharField(max_length=255)
    file_size = models.PositiveIntegerField()
    content_type = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.original_name