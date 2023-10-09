import datetime

from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from django.views.generic.base import View

from django.contrib.auth import authenticate,login

from django.contrib import messages
from django.contrib.auth.models import User

from .models import Movie, Category,Profile

from .forms import SignUpForm
# Create your views here.


    
def register(request):
    if request.method == 'GET':
        form = SignUpForm()
        return render(request, 'auth/register.html', {'form':form})
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            u = form.save()
            Profile.objects.create(user=u)
            
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            messages.add_message(request,messages.SUCCESS,"Welcome!")
            return redirect("/")
        else:
            messages.add_message(request,messages.WARNING,"Form not valid!")
            return redirect("/")
            

class ProfileView(View):
    template_name = 'auth/profile.html'
    
    def get(self,request,username):
        user = User.objects.get(username=username)
        return render(request,self.template_name, {"user":user})


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
    

class CategoryListView(ListView):
    model = Movie
    template_name = 'list.html'
    
    def get_queryset(self):
        return Movie.objects.filter(category=Category.objects.get(slug=self.kwargs.get("slug")))
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["category_name"] = Category.objects.get(slug=self.kwargs.get("slug")).name
        return context
    
    

class MovieFilterView(ListView):
    model = Movie
    template_name = 'list.html'
    
    def get_queryset(self):
        if self.kwargs.get("sort") == 'latest':
            qs = Movie.objects.all().order_by('-id')
            return qs
        if self.kwargs.get("sort") == 'this_year':
            qs = Movie.objects.filter().order_by('-year')
            return qs
        if self.kwargs.get("sort") == 'today':
            time_24_hours_ago = datetime.datetime.now() - datetime.timedelta(days=1)
            qs = Movie.objects.filter(published_time__gte=time_24_hours_ago)
            return qs
        if self.kwargs.get("sort") == 'last_week':
            time_24_hours_ago = datetime.datetime.now() - datetime.timedelta(days=7)
            qs = Movie.objects.filter(published_time__gte=time_24_hours_ago)
            return qs
        if self.kwargs.get("sort") == 'last_month':
            time_24_hours_ago = datetime.datetime.now() - datetime.timedelta(days=30)
            qs = Movie.objects.filter(published_time__gte=time_24_hours_ago)
            return qs
        if self.kwargs.get("sort") == 'everytime':            
            qs = Movie.objects.filter(rating__gte=5)
            return qs
        
        
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context[""] =  None
        return context
    
    
