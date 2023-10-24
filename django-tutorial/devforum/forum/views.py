from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.contrib.messages.views import SuccessMessageMixin

# Create your views here.


class HomePageView(SuccessMessageMixin,TemplateView):
    template_name = 'index.html'
    success_message = "Nima gap was created successfully"