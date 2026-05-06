from .models import Notification


def create_notification(*, user, title, message, type, related_ticket=None):
    if not user:
        return None

    return Notification.objects.create(
        user=user,
        title=title,
        message=message,
        type=type,
        related_ticket=related_ticket,
    )


def notify_ticket_assigned(ticket, assigned_user):
    return create_notification(
        user=assigned_user,
        title=f"Ticket #{ticket.id} assigned to you",
        message=f"Ticket #{ticket.id} has been assigned to you.",
        type=Notification.NotificationType.TICKET_ASSIGNED,
        related_ticket=ticket,
    )


def notify_comment_added(ticket, user):
    return create_notification(
        user=user,
        title=f"New comment on ticket #{ticket.id}",
        message=f"A new comment was added on ticket #{ticket.id}.",
        type=Notification.NotificationType.COMMENT_ADDED,
        related_ticket=ticket,
    )


def notify_ticket_resolved(ticket, user):
    return create_notification(
        user=user,
        title=f"Ticket #{ticket.id} resolved",
        message=f"Ticket #{ticket.id} has been resolved.",
        type=Notification.NotificationType.TICKET_RESOLVED,
        related_ticket=ticket,
    )


def notify_invitation_sent(user):
    return create_notification(
        user=user,
        title="You have been invited to organization",
        message="You have been invited to join an organization.",
        type=Notification.NotificationType.INVITATION_SENT,
    )


def notify_role_changed(user, new_role):
    return create_notification(
        user=user,
        title=f"Your role changed to {new_role}",
        message=f"Your role has been changed to {new_role}.",
        type=Notification.NotificationType.ROLE_CHANGED,
    )