from .models import AuditLog


def create_audit_log(
    *,
    organization,
    user=None,
    action,
    entity_type,
    entity_id=None,
    description="",
    metadata=None,
):
    if not organization:
        return None

    return AuditLog.objects.create(
        organization=organization,
        user=user,
        action=action,
        entity_type=entity_type,
        entity_id=entity_id,
        description=description,
        metadata=metadata or {},
    )