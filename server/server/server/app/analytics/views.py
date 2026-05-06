from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .services import (
    get_overview,
    get_tickets_by_status,
    get_tickets_by_priority,
    get_agent_performance,
    get_resolution_time,
    get_ticket_trends,
)


class AnalyticsAccessMixin:
    allowed_roles = ["ORG_ADMIN", "MANAGER"]

    def has_access(self, user):
        return getattr(user, "role", None) in self.allowed_roles

    def get_organization(self, user):
        return getattr(user, "organization", None)

    def check_access(self, request):
        if not self.has_access(request.user):
            return Response(
                {"detail": "You do not have permission to view analytics."},
                status=status.HTTP_403_FORBIDDEN,
            )

        organization = self.get_organization(request.user)

        if not organization:
            return Response(
                {"detail": "User is not linked to an organization."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        return organization


class AnalyticsOverviewView(AnalyticsAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organization = self.check_access(request)
        if isinstance(organization, Response):
            return organization

        return Response(get_overview(organization))


class TicketsByStatusView(AnalyticsAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organization = self.check_access(request)
        if isinstance(organization, Response):
            return organization

        return Response(get_tickets_by_status(organization))


class TicketsByPriorityView(AnalyticsAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organization = self.check_access(request)
        if isinstance(organization, Response):
            return organization

        return Response(get_tickets_by_priority(organization))


class AgentPerformanceView(AnalyticsAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organization = self.check_access(request)
        if isinstance(organization, Response):
            return organization

        return Response(get_agent_performance(organization))


class ResolutionTimeView(AnalyticsAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organization = self.check_access(request)
        if isinstance(organization, Response):
            return organization

        return Response(get_resolution_time(organization))


class TicketTrendsView(AnalyticsAccessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        organization = self.check_access(request)
        if isinstance(organization, Response):
            return organization

        days = int(request.query_params.get("days", 30))

        return Response(get_ticket_trends(organization, days=days))