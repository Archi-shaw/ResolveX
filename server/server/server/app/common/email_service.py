from django.conf import settings
from django.core.mail import send_mail


def send_invitation_email(email, invitation_link):
    subject = "You have been invited"
    message = f"You have been invited to join an organization.\n\nAccept invitation: {invitation_link}"

    return send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [email],
        fail_silently=False,
    )


def send_ticket_assigned_email(user, ticket):
    subject = f"Ticket #{ticket.id} assigned to you"
    message = f"You have been assigned ticket #{ticket.id}: {ticket.title}"

    return send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=False,
    )


def send_password_reset_email(user, reset_link):
    subject = "Password reset request"
    message = f"Reset your password using this link:\n\n{reset_link}"

    return send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=False,
    )