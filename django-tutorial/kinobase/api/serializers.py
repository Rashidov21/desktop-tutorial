from rest_framework import serializers
from movies.models import Movie


class MovieListSerilizer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = ["title","genre","year","description"]