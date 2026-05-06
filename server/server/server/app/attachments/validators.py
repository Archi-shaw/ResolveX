from django.core.exceptions import ValidationError

ALLOWED_CONTENT_TYPES = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "text/plain",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


def validate_attachment_file(file):
    if file.size > MAX_FILE_SIZE:
        raise ValidationError("File size cannot exceed 10 MB.")

    content_type = getattr(file, "content_type", None)

    if content_type not in ALLOWED_CONTENT_TYPES:
        raise ValidationError("Unsupported file type.")