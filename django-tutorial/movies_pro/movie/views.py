from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic import ListView
# Create your views here.

from .models import Movie



class MovieListView(ListView):
    model = Movie
    template_name = 'index.html'