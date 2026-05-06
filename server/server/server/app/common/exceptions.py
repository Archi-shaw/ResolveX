from rest_framework.views import exception_handler
from rest_framework.exceptions import (
    AuthenticationFailed,
    NotFound,
    PermissionDenied,
    ValidationError,
)


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is None:
        return response

    message = "Something went wrong"

    if isinstance(exc, AuthenticationFailed):
        message = "Invalid or expired token"
    elif isinstance(exc, NotFound):
        message = "Object not found"
    elif isinstance(exc, PermissionDenied):
        message = "Permission denied"
    elif isinstance(exc, ValidationError):
        message = "Validation error"

    response.data = {
        "success": False,
        "message": message,
        "errors": response.data,
    }

    return response