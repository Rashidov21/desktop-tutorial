from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from django.views.generic.base import TemplateView

from django.contrib.auth import authenticate,login

from django.contrib import messages
from django.contrib.auth.models import User

from .models import Movie
# Create your views here.

def user_login(request):
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        messages.add_message(request,messages.SUCCESS,"Welcome !")
        return redirect("/")
    else:
        # Return an 'invalid login' error message.
        messages.add_message(request,messages.WARNING,"User not found !")
        return redirect("/")
def register(request):
    username = request.POST["username"]
    password1 = request.POST["password1"]
    password2 = request.POST["password2"]
    
    if password1 == password2:
        u = User.objects.create(username=username, password=password1)
        print(u)
        user = authenticate(request,username=u.username,password=u.password)
        login(request,user)
        print("done")
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
    


