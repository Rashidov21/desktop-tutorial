from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.base import TemplateView

from .models import Movie
# Create your views here.


class HomeView(ListView):
    model = Movie
    template_name = 'index.html'
    # extra_context = {'movie':Movie.objects.first()}
    
    
class MovieDetailView(DetailView):
    model = Movie
    template_name = 'detail.html'
    # extra_context = {'movie':Movie.objects.first()}