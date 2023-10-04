from django.urls import path
from .import views

app_name = 'movies'

urlpatterns = [
    path('', views.HomeView.as_view(), name='movie_list'),
    path('detail/<slug:slug>', views.MovieDetailView.as_view(), name='detail'),
]
