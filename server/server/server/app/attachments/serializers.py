from rest_framework import serializers

from .models import Attachment
from .validators import validate_attachment_file


class AttachmentSerializer(serializers.ModelSerializer):
    file = serializers.FileField(write_only=True)

    class Meta:
        model = Attachment
        fields = [
            "id",
            "ticket",
            "uploaded_by",
            "file",
            "original_name",
            "file_size",
            "content_type",
            "created_at",
        ]
        read_only_fields = [
            "id",
            "ticket",
            "uploaded_by",
            "original_name",
            "file_size",
            "content_type",
            "created_at",
        ]

    def validate_file(self, file):
        validate_attachment_file(file)
        return file

    def create(self, validated_data):
        file = validated_data["file"]

        return Attachment.objects.create(
            ticket=self.context["ticket"],
            uploaded_by=self.context["request"].user,
            file=file,
            original_name=file.name,
            file_size=file.size,
            content_type=getattr(file, "content_type", ""),
        )