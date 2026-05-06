from django.urls import path

from .views import (
    FeatureFlagListCreateView,
    FeatureFlagDetailView,
    FeatureFlagEnableView,
    FeatureFlagDisableView,
)


urlpatterns = [
    path("", FeatureFlagListCreateView.as_view(), name="feature-flag-list-create"),
    path("<int:id>/", FeatureFlagDetailView.as_view(), name="feature-flag-detail"),
    path("<int:id>/enable/", FeatureFlagEnableView.as_view(), name="feature-flag-enable"),
    path("<int:id>/disable/", FeatureFlagDisableView.as_view(), name="feature-flag-disable"),
]