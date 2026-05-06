from django.conf import settings
from django.db import models


class FeatureFlag(models.Model):
    organization = models.ForeignKey(
        "organisations.Organisation",
        on_delete=models.CASCADE,
        related_name="feature_flags",
    )
    name = models.CharField(max_length=255)
    key = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    is_enabled = models.BooleanField(default=False)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="created_feature_flags",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]
        unique_together = ["organization", "key"]

    def __str__(self):
        return f"{self.key} - {self.organization}"