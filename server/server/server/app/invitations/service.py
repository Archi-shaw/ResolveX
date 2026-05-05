from django.contrib.auth import get_user_model
from django.db import transaction
from django.utils import timezone
from rest_framework.exceptions import PermissionDenied, ValidationError

from .models import Invitation

User = get_user_model()


def create_invitation(*, invited_by, email, role):
    if invited_by.role != "ADMIN":
        raise PermissionDenied("Only organization admins can send invitations.")

    if User.objects.filter(email=email).exists():
        raise ValidationError("User with this email already exists.")

    existing_invite = Invitation.objects.filter(
        email=email,
        organisation=invited_by.organisation,
        status=Invitation.Status.PENDING
    ).first()

    if existing_invite:
        raise ValidationError("A pending invitation already exists for this email.")

    invitation = Invitation.objects.create(
    invited_by=invited_by,
    email=email,
    role=role,
    organisation=invited_by.organisation,  
    )
    print("Invitation token:", invitation.tokens)
    print("Invite link:", f"http://frontend.com/accept-invite/{invitation.tokens}")

    return invitation


@transaction.atomic
def accept_invitation(*, token, name, phone="", password):
    try:
        invitation = Invitation.objects.select_for_update().get(token=token)
    except Invitation.DoesNotExist:
        raise ValidationError("Invalid invitation token.")

    if invitation.status != Invitation.Status.PENDING:
        raise ValidationError("Invitation is no longer valid.")

    if invitation.is_expired:
        invitation.status = Invitation.Status.EXPIRED
        invitation.save(update_fields=["status"])
        raise ValidationError("Invitation has expired.")

    if User.objects.filter(email=invitation.email).exists():
        raise ValidationError("User already exists.")

    user = User.objects.create(
        email=invitation.email,
        name=name,
        phone=phone,
        organisation=invitation.organisation,
        role=invitation.role,
    )

    user.set_password(password)
    user.save()

    invitation.delete()

    return user


def reject_invitation(*, token):
    try:
        invitation = Invitation.objects.get(token=token)
    except Invitation.DoesNotExist:
        raise ValidationError("Invalid invitation token.")

    if invitation.status != Invitation.Status.PENDING:
        raise ValidationError("Invitation is no longer valid.")

    invitation.status = Invitation.Status.REJECTED
    invitation.save(update_fields=["status"])

    return invitation