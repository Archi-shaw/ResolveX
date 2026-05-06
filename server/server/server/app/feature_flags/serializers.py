from rest_framework import serializers

from .models import FeatureFlag


class FeatureFlagSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureFlag
        fields = [
            "id",
            "organization",
            "name",
            "key",
            "description",
            "is_enabled",
            "created_by",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "id",
            "organization",
            "created_by",
            "created_at",
            "updated_at",
        ]

    def validate_key(self, value):
        return value.upper().replace(" ", "_")