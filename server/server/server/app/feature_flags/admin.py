from django.contrib import admin

from .models import FeatureFlag


@admin.register(FeatureFlag)
class FeatureFlagAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "organization",
        "name",
        "key",
        "is_enabled",
        "created_by",
        "created_at",
    ]
    list_filter = [
        "is_enabled",
        "created_at",
    ]
    search_fields = [
        "name",
        "key",
        "organization__name",
    ]