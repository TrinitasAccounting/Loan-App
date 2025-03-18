
from rest_framework import serializers
from .models import Loandata

class LoandataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loandata
        fields = '__all__'




