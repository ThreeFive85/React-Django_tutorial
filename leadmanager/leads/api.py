from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from django.core.exceptions import PermissionDenied

# Viewset은 View(CRUD)를 설계하는 가장 간단한 방법

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permissions_classes = (
        permissions.IsAuthenticated,
    )

    serializer_class = LeadSerializer

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()

        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.reques.user)
