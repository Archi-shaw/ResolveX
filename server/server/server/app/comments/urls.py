from django.urls import path
from .views import TicketCommentListCreateView, TicketCommentDetailView

urlpatterns = [
    path(
        "tickets/<int:ticket_id>/comments/",
        TicketCommentListCreateView.as_view(),
        name="ticket-comments"
    ),
    path(
        "tickets/<int:ticket_id>/comments/<int:comment_id>/",
        TicketCommentDetailView.as_view(),
        name="ticket-comment-detail"
    ),
]