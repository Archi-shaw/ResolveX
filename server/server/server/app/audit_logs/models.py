from django.conf import settings
from django.db import models


class AuditLog(models.Model):
    class Action(models.TextChoices):
        ORGANIZATION_CREATED = "ORGANIZATION_CREATED", "Organization Created"
        USER_INVITED = "USER_INVITED", "User Invited"
        USER_JOINED = "USER_JOINED", "User Joined"
        ROLE_CHANGED = "ROLE_CHANGED", "Role Changed"
        USER_DEACTIVATED = "USER_DEACTIVATED", "User Deactivated"

        TICKET_CREATED = "TICKET_CREATED", "Ticket Created"
        TICKET_ASSIGNED = "TICKET_ASSIGNED", "Ticket Assigned"
        TICKET_STARTED = "TICKET_STARTED", "Ticket Started"
        TICKET_RESOLVED = "TICKET_RESOLVED", "Ticket Resolved"
        TICKET_CLOSED = "TICKET_CLOSED", "Ticket Closed"

        COMMENT_ADDED = "COMMENT_ADDED", "Comment Added"
        ATTACHMENT_UPLOADED = "ATTACHMENT_UPLOADED", "Attachment Uploaded"

    organization = models.ForeignKey(
        "organisations.Organisation",
        on_delete=models.CASCADE,
        related_name="audit_logs",
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="audit_logs",
    )
    action = models.CharField(
        max_length=50,
        choices=Action.choices,
    )
    entity_type = models.CharField(max_length=100)
    entity_id = models.PositiveIntegerField(null=True, blank=True)
    description = models.TextField(blank=True)
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.action} - {self.entity_type} #{self.entity_id}"