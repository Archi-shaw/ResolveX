from django.conf import settings
from django.db import models


class Notification(models.Model):
    class NotificationType(models.TextChoices):
        TICKET_ASSIGNED = "TICKET_ASSIGNED", "Ticket Assigned"
        COMMENT_ADDED = "COMMENT_ADDED", "Comment Added"
        TICKET_RESOLVED = "TICKET_RESOLVED", "Ticket Resolved"
        INVITATION_SENT = "INVITATION_SENT", "Invitation Sent"
        ROLE_CHANGED = "ROLE_CHANGED", "Role Changed"

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="notifications",
    )
    title = models.CharField(max_length=255)
    message = models.TextField()
    type = models.CharField(
        max_length=50,
        choices=NotificationType.choices,
    )
    is_read = models.BooleanField(default=False)
    related_ticket = models.ForeignKey(
        "tickets.Ticket",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="notifications",
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title