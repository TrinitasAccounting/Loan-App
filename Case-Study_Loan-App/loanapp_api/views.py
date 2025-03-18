from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Loandata
from .serializers import LoandataSerializer

# Create your views here.
@api_view(['GET'])
def get_loans(request):
    loans = Loandata.objects.all()
    serializedData = LoandataSerializer(loans, many=True)
    return Response(serializedData.data)

@api_view(['POST'])
def create_loan(request):
    data = request.data
    serializer = LoandataSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
