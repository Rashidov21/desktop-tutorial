import datetime
from typing import Any
from django.db.models.query import QuerySet
from django.db.models import Q

from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.views.generic import ListView, DetailView
from django.views.generic.base import View

from django.contrib.auth import authenticate,login,logout

from django.contrib import messages
from django.contrib.auth.models import User

from django_countries import countries

from .models import Movie,Genre, Category,Profile

from .forms import SignUpForm, SelectCountryForm
# Create your views here.
from .utils import get_user_movie_history_list

    
    
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
            
def _logout(request):
    logout(request)
    return redirect('/login/')

class ProfileView(View):
    template_name = 'auth/profile.html'
    
    def get(self,request,username):
        user = User.objects.get(username=username)
        return render(request,self.template_name, {"user":user})


class HomeView(ListView):
    model = Movie
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # print(type(self.request.session)) 
        # print(dir(self.request.session)) 
        # print(self.request.session.get_expiry_age())
        # print(self.request.session.get_expiry_date())
        # print(self.request.session.get_session_cookie_age())
        return context
    
    # extra_context = {'movie':Movie.objects.first()}
    
    
class MovieDetailView(DetailView):
    model = Movie
    template_name = 'detail.html'
    
    
    def get_context_data(self, **kwargs):
        obj = self.get_object()
        get_user_movie_history_list(self.request) # if user session movie history 
        
        if obj.id not in self.request.session['viewed_movies']:
            self.request.session['viewed_movies'].append(obj.id)
            obj.views += 1
            obj.save()
        else:
            pass
        
        context = super().get_context_data(**kwargs)
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
    
class GenreListView(ListView):
    model = Movie
    template_name = 'list.html'
    
    def get_queryset(self):
        ids = []
        for i in self.request.GET.getlist('genre'):
            g = Genre.objects.get(slug=i)
            ids.append(g.id)
        qs = Movie.objects.filter(genre__in=ids)

        return qs
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context["category_name"] = Category.objects.get(slug=self.kwargs.get("slug")).name
   
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
        if self.kwargs.get("sort") == 'rating':            
            qs = Movie.objects.filter(rating__gte=1)
            return qs
        
        
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context[""] =  None
        return context
    


def add_to_favorite_movies(request,user_id,movie_id):
    data = {}
    user = User.objects.get(id=user_id)
    movie = Movie.objects.get(id=movie_id)
    if movie not in user.profile.favorites.all():
        user.profile.favorites.add(movie)
        print("OK")
        messages.add_message(request,messages.SUCCESS, "Контент добавлен в избранное")
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        messages.add_message(request,messages.ERROR, "Error !")
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


class UserFavoriteMovies(ListView):
    model = Movie
    template_name = 'favorites.html'
    
    
    def get_queryset(self):
        user = User.objects.get(id=self.kwargs.get('id'))
        qs = Movie.objects.filter(id__in=user.profile.favorites.all())
        return qs
    
    
class UserMovieHistory(ListView):
    model = Movie
    template_name = 'favorites.html'
    extra_context = {'page_title':"Просмотры"}
    

    def get_queryset(self):
        qs = Movie.objects.filter(id__in=self.request.session["viewed_movies"])
        return qs
    