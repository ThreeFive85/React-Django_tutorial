from rest_framework import serializers
from leads.models import Lead

# Lead Serializer


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'  # 필드에 이름, 이메일 등을 선택하여 입력할 수도 있고 모두 선택할 수도 있다.
