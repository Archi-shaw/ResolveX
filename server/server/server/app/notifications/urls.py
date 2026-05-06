from django.urls import path

from .views import (
    NotificationListView,
    NotificationUnreadCountView,
    NotificationMarkReadView,
    NotificationReadAllView,
    NotificationDeleteView,
)


urlpatterns = [
    path("", NotificationListView.as_view(), name="notification-list"),
    path("unread-count/", NotificationUnreadCountView.as_view(), name="notification-unread-count"),
    path("<int:id>/read/", NotificationMarkReadView.as_view(), name="notification-mark-read"),
    path("read-all/", NotificationReadAllView.as_view(), name="notification-read-all"),
    path("<int:id>/", NotificationDeleteView.as_view(), name="notification-delete"),
]