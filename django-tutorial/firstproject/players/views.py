from django.shortcuts import render
from django.views.generic.base import TemplateView
# Create your views here.


class PLayerListView(TemplateView):
    template_name = 'index.html'
    