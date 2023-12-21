from django.urls import path
from . import views

app_name = "movie"

urlpatterns = [ 
    # home page
    path("", views.MovieListView.as_view(), name='movie_list')
]
