from django.urls import path
from .views import (
    InvitationListCreateView,
    AcceptInvitationView,
    RejectInvitationView,
)

urlpatterns = [
    path("", InvitationListCreateView.as_view(), name="invitations"),
    path("accept/<str:tokens>/", AcceptInvitationView.as_view(), name="accept-invitation"),
    path("reject/<str:tokens>/", RejectInvitationView.as_view(), name="reject-invitation"),
]