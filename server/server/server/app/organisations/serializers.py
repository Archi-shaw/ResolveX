from rest_framework import serializers
from .models import Organisation

class OrganisationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Organisation
        fields = [
            'id',
            'name',
            'slug',
            'email',
            'phone',
            'website',
            'industry',
            'logo',
            'is_active',
            'created_at',
            'updated_at',
        ]

        read_only_fields=['id', 'name',  'slug', 'created_at', 'updated_at',]

