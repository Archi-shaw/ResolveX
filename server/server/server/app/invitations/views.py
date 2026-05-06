from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

from .models import Invitation
from .serializers import (
    InviteSerializer,
    AcceptInviteSerializer,
    InvitationListSerializer,
)
from .service import (
    create_invitation,
    accept_invitation,
    reject_invitation,
)


class InvitationListCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        invitations = Invitation.objects.filter(
            organisation=request.user.organisation
        ).order_by("-created_at")

        serializer = InvitationListSerializer(invitations, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = InviteSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        invitation = create_invitation(
            invited_by=request.user,
            email=serializer.validated_data["email"],
            role=serializer.validated_data["role"],
        )

        return Response(
            {
                "message": "Invitation created successfully.",
                "tokens": invitation.tokens,
                "invite_link": f"http://127.0.0.1:8000/api/v1/invitations/accept/{invitation.tokens}",
            },
            status=status.HTTP_201_CREATED,
        )


class AcceptInvitationView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, tokens):
        serializer = AcceptInviteSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = accept_invitation(
            tokens=tokens,
            name=serializer.validated_data["name"],
            phone=serializer.validated_data.get("phone", ""),
            password=serializer.validated_data["password"],
        )

        return Response(
            {
                "message": "Invitation accepted successfully.",
                "user_id": user.id,
                "email": user.email,
            },
            status=status.HTTP_201_CREATED,
        )


class RejectInvitationView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, tokens):
        reject_invitation(tokens=tokens)

        return Response(
            {"message": "Invitation rejected successfully."},
            status=status.HTTP_200_OK,
        )