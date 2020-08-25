from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Viewset은 View(CRUD)를 설계하는 가장 간단한 방법

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
