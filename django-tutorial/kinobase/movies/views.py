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
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        m = Movie.objects.last()
        for u in m.roles_set.all():
            print(u.author.all())
            print(u.movie)
        return context
    
    # extra_context = {'movie':Movie.objects.first()}