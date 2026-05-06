from django.contrib import admin

from .models import AuditLog


@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "organization",
        "user",
        "action",
        "entity_type",
        "entity_id",
        "created_at",
    ]
    list_filter = [
        "action",
        "entity_type",
        "created_at",
    ]
    search_fields = [
        "user__email",
        "action",
        "entity_type",
        "description",
    ]
    readonly_fields = [
        "organization",
        "user",
        "action",
        "entity_type",
        "entity_id",
        "description",
        "metadata",
        "created_at",
    ]