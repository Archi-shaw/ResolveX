from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Comment
        fields = [
            "id",
            "ticket",
            "user",
            "message",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "id",
            "ticket",
            "user",
            "created_at",
            "updated_at",
        ]