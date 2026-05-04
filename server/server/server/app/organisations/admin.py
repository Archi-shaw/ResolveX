from django.contrib import admin
from .models import Organisation

@admin.register(Organisation)
class OrganisationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug' , 'email', 'phone', 'industry', 'is_active', 'created_at')
    list_filter = ('industry', 'is_active', 'created_at')
    search_feilds = ('name', 'email','slug')
    readonly_fields = ('created_at','updated_at')

    
