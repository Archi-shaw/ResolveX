from datetime import timedelta

from django.contrib.auth import get_user_model
from django.db.models import Count, Avg, Min, Max, F, DurationField, ExpressionWrapper
from django.db.models.functions import TruncDay
from django.utils import timezone

from app.tickets.models import Ticket


User = get_user_model()


def get_org_tickets(organization):
    return Ticket.objects.filter(organization=organization)


def get_overview(organization):
    tickets = get_org_tickets(organization)
    users = User.objects.filter(organization=organization)

    return {
        "total_tickets": tickets.count(),
        "open_tickets": tickets.filter(status="OPEN").count(),
        "in_progress_tickets": tickets.filter(status="IN_PROGRESS").count(),
        "resolved_tickets": tickets.filter(status="RESOLVED").count(),
        "closed_tickets": tickets.filter(status="CLOSED").count(),
        "total_users": users.count(),
        "active_users": users.filter(is_active=True).count(),
    }


def get_tickets_by_status(organization):
    tickets = get_org_tickets(organization)

    data = {
        "OPEN": 0,
        "IN_PROGRESS": 0,
        "RESOLVED": 0,
        "CLOSED": 0,
    }

    results = tickets.values("status").annotate(count=Count("id"))

    for item in results:
        data[item["status"]] = item["count"]

    return data


def get_tickets_by_priority(organization):
    tickets = get_org_tickets(organization)

    data = {
        "LOW": 0,
        "MEDIUM": 0,
        "HIGH": 0,
        "URGENT": 0,
    }

    results = tickets.values("priority").annotate(count=Count("id"))

    for item in results:
        data[item["priority"]] = item["count"]

    return data


def get_agent_performance(organization):
    agents = User.objects.filter(
        organization=organization,
        role="AGENT",
    )

    data = []

    for agent in agents:
        assigned_tickets = Ticket.objects.filter(
            organization=organization,
            assigned_to=agent,
        )

        data.append({
            "agent_id": agent.id,
            "agent_name": getattr(agent, "full_name", None) or agent.email,
            "assigned_tickets": assigned_tickets.count(),
            "resolved_tickets": assigned_tickets.filter(status="RESOLVED").count(),
            "closed_tickets": assigned_tickets.filter(status="CLOSED").count(),
        })

    return data


def format_duration(duration):
    if not duration:
        return None

    total_seconds = int(duration.total_seconds())
    hours = total_seconds // 3600
    minutes = (total_seconds % 3600) // 60

    return {
        "seconds": total_seconds,
        "display": f"{hours}h {minutes}m",
    }


def get_resolution_time(organization):
    tickets = get_org_tickets(organization).filter(
        resolved_at__isnull=False,
    ).annotate(
        resolution_duration=ExpressionWrapper(
            F("resolved_at") - F("created_at"),
            output_field=DurationField(),
        )
    )

    stats = tickets.aggregate(
        average_resolution_time=Avg("resolution_duration"),
        fastest_resolution_time=Min("resolution_duration"),
        slowest_resolution_time=Max("resolution_duration"),
    )

    return {
        "average_resolution_time": format_duration(stats["average_resolution_time"]),
        "fastest_resolution_time": format_duration(stats["fastest_resolution_time"]),
        "slowest_resolution_time": format_duration(stats["slowest_resolution_time"]),
    }


def get_ticket_trends(organization, days=30):
    start_date = timezone.now() - timedelta(days=days)

    tickets = get_org_tickets(organization).filter(
        created_at__gte=start_date,
    )

    results = (
        tickets
        .annotate(day=TruncDay("created_at"))
        .values("day")
        .annotate(count=Count("id"))
        .order_by("day")
    )

    return [
        {
            "date": item["day"].date(),
            "count": item["count"],
        }
        for item in results
    ]