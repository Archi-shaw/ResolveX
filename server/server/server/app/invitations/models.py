from django.db import models
from django.conf import settings
from django.utils import timezone
from datetime import timedelta

from app.organisations.models import Organisation
from .tokens import generate_tokens

class Invitation(models.Model):
    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        ACCEPTED = "ACCEPTED", "Accepted"
        REJECTED = "REJECTED", "Rejected"
        EXPIRED = "EXPIRED", "Expired"

    email = models.EmailField()
    organisation = models.ForeignKey(
        Organisation,
        on_delete=models.CASCADE,
        related_name="invitation"
    )
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        MANAGER = "MANAGER", "Manager"
        AGENT = "AGENT", "Agent"
        USER = "USER", "User"
        
    role = models.CharField(
        max_length=50,
        choices=Role.choices
    )
    tokens = models.CharField(
        max_length=123,
        unique=True,
        default=generate_tokens
    )
    invited_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="invitations"
    )
    expires_at = models.DateTimeField()
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING
    )

    created_at = models.DateTimeField(auto_now_add=True)
    def save(self, *args, **kwargs):
        if not self.expires_at:
            self.expires_at = timezone.now() + timedelta(days=7)
        super().save(*args, **kwargs)

    @property
    def is_expired(self):
        return timezone.now() > self.expires_at

    def __str__(self):
        return f"{self.email} - {self.organisation}" 