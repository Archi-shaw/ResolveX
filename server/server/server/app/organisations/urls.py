from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrganizationViewSet, current_organisation

router = DefaultRouter()
router.register(r'organisations', OrganizationViewSet, basename='organisations')

urlpatterns = [
    path('current/', current_organisation, name='current_organisation'),
    path('', include(router.urls)),
]