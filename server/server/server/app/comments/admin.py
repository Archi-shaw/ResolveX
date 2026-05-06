from django.contrib import admin
from .models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("id", "ticket", "user", "created_at", "updated_at")
    search_fields = ("message", "user__email", "user__username")
    list_filter = ("created_at", "updated_at")