from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.db.models import QuerySet
from .models import Organisation
from .serializers import OrganisationSerializers


class OrganizationViewSet(viewsets.ModelViewSet):
    serializer_class = OrganisationSerializers
    permission_classes = [IsAuthenticated]

    def get_queryset(self) -> QuerySet[Organisation]: # type: ignore
        user = self.request.user

        if user.is_superuser:
            return Organisation.objects.all()

        if hasattr(user, 'organisation') and user.organisation: # type: ignore
            return Organisation.objects.filter(id=user.organisation.id) # type: ignore

        return Organisation.objects.none()
    
@api_view(['GET','PATCH'])
@permission_classes([IsAuthenticated])

def current_organisation(request):
    user = request.user

    if not hasattr(user, 'organisation')  or not user.organisation:
        return Response(
            {'details': 'User does not belong to any organisation'},
            status=status.HTTP_404_NOT_FOUND,
            )

    organisation = user.organisation

    if request.method=='GET':
        serializer = OrganisationSerializers(organisation)
        return Response(serializer.data)
    
    if request.method=='PATCH':
         serializer = OrganisationSerializers(Organisation,data=request.data,partial=True)


         if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
