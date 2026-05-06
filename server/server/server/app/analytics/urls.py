from django.urls import path

from .views import (
    AnalyticsOverviewView,
    TicketsByStatusView,
    TicketsByPriorityView,
    AgentPerformanceView,
    ResolutionTimeView,
    TicketTrendsView,
)


urlpatterns = [
    path("overview/", AnalyticsOverviewView.as_view(), name="analytics-overview"),
    path("tickets-by-status/", TicketsByStatusView.as_view(), name="analytics-tickets-by-status"),
    path("tickets-by-priority/", TicketsByPriorityView.as_view(), name="analytics-tickets-by-priority"),
    path("agent-performance/", AgentPerformanceView.as_view(), name="analytics-agent-performance"),
    path("resolution-time/", ResolutionTimeView.as_view(), name="analytics-resolution-time"),
    path("ticket-trends/", TicketTrendsView.as_view(), name="analytics-ticket-trends"),
]