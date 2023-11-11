from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic import ListView
from .models import Club,Player

from .forms import CountryForm
# Create your views here.

# ListView -> objects.all() -> SELECT * FROM your_tabel
class PLayerListView(ListView):
    model = Player
    # queryset = Player.objects.filter(height__gte=190) # height >= 190
    # queryset = Player.objects.filter(height__lte=180)  # height <= 180
    # context_object_name = "players"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["clubs"] = Club.objects.all()
        context["form"] = CountryForm()
        return context
    
    
class ClubPLayerListView(ListView):
    model = Player
    
    
    def get_queryset(self):
        qs = super().get_queryset()
        club = Club.objects.get(name=self.kwargs.get("name"))
        qs = Player.objects.filter(club=club)
        return qs
    