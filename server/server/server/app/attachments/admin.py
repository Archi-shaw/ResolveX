from django.contrib import admin

from .models import Attachment


@admin.register(Attachment)
class AttachmentAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "ticket",
        "uploaded_by",
        "original_name",
        "file_size",
        "content_type",
        "created_at",
    ]
    search_fields = [
        "original_name",
        "ticket__id",
        "uploaded_by__email",
    ]
    list_filter = [
        "content_type",
        "created_at",
    ]