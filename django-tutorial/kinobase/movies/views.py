from django.shortcuts import render
from django.views.generic.base import TemplateView

from .models import Movie
# Create your views here.


class HomeView(TemplateView):
    template_name = 'index.html'
    extra_context = {'movie':Movie.objects.first()}
    
    
class MovieDetailView(TemplateView):
    template_name = 'detail.html'
    extra_context = {'movie':Movie.objects.first()}