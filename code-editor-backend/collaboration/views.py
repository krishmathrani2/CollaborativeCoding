from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Session
from .serializers import SessionSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
