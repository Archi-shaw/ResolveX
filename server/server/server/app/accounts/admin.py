from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ("email","password","name","role","organisation","is_active", "is_staff")
    list_filter = ("role","is_active","is_staff","is_superuser")
    search_fields = ("email","name","phone")
    ordering = ("email",)

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal Info", {"fields": ("name", "phone", "organisation", "role")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "name", "phone", "organisation", "role", "password1", "password2", "is_staff", "is_active"),
        }),
    )



    