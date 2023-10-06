from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from django.views.generic.base import TemplateView

from django.contrib.auth import authenticate,login

from django.contrib import messages
from django.contrib.auth.models import User

from .models import Movie

from .forms import SignUpForm
# Create your views here.


    
def register(request):
    if request.method == 'GET':
        form = SignUpForm()
        return render(request, 'auth/register.html', {'form':form})
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            messages.add_message(request,messages.SUCCESS,"Welcome!")
            return redirect("/")
        else:
            messages.add_message(request,messages.WARNING,"Form not valid!")
            return redirect("/")
            
            
def password_reset(request):
    pass

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
    


