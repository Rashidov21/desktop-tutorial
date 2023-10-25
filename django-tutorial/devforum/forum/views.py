from django.shortcuts import render
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.template.defaultfilters import slugify

# Create your views here.
from .models import Problem,Solve

class HomePageView(ListView):
    model = Problem
    template_name = 'index.html'
    
    
class AddProblemView(LoginRequiredMixin,CreateView):
    login_url = '/users/login/'
    
    model = Problem
    fields = ['title','tags','body']
    success_url = '/'
    
    
    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.slug = slugify(self.object.title)
        self.object.author = self.request.user
        return super().form_valid(form)
    