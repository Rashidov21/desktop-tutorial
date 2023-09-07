from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render

from django.views.generic import TemplateView , ListView

from .models import Player
# Create your views here.
# controller class 
# class HomeView(TemplateView):
#     template_name = "index.html"
    # extra_context = {"test_text":"conntroller method testing..."}
    
class HomeView(ListView):
    model = Player
    
    # def get_queryset(self):
    #     qs = Player.objects.filter(name__icontains="on")
    #     return qs
    
    
    
    # context_object_name = "players"
    # template_name = "index.html"


# conntroller method 
# def homePageView(request):
#     return render(request, "index.html")

def aboutPageView(request):
    return render(request, "about.html")