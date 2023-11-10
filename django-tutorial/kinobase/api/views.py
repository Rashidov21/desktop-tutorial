from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import MovieListSerilizer

from movies.models import Movie


class MovieListViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Movie.objects.all().order_by('-published_time')
    serializer_class = MovieListSerilizer
    # permission_classes = [permissions.IsAuthenticated]