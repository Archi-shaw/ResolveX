from .views import LoginView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="users")

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path("", include(router.urls)),
]