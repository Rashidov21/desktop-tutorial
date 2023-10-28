from django.shortcuts import render, redirect, HttpResponseRedirect
from django.urls import reverse_lazy, reverse
from django.views.generic import ListView, DetailView,FormView
from django.views.generic.base import View
from django.views.generic.edit import CreateView
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.template.defaultfilters import slugify

# Create your views here.
from .models import Problem,Solve
from users.models import User

# Main forms 
from .forms import AddSolveForm

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

class ProblemDetailView(FormView,DetailView):
    model = Problem
    form_class = AddSolveForm
    
    def form_valid(self, form):
        if self.request.user.is_authenticated:
            self.object = form.save(commit=False)
            self.object.problem = self.get_object()
            self.object.user = self.request.user
            form.save()
            return redirect(f"/detail/{self.get_object().id}")
        else:
            messages.add_message(self.request, messages.WARNING, "Only authenticated users can add solutions !")
            return redirect(f"/detail/{self.get_object().id}")
        
        


class AddUserReactuion(View):
    
    
    def get(self,request,subject,pk,reaction):
        if subject == "problem":
            problem = Problem.objects.get(id=pk)
            if reaction == "like":
                problem.like += 1
                problem.save()
            else:
                problem.dislike += 1
                problem.save()
        else:
            solve = Solve.objects.get(id=pk)
            if reaction == "like":
                solve.up += 1
                solve.save()
            else:
                solve.down += 1
                solve.save()

        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    

class SetRighUsertSolution(View):
    
    def get(self,request,user_id, solution_id):
        user = User.objects.get(id=user_id)
        solution = Solve.objects.get(id=solution_id)
        
        solution.true_solution = True
        user.true_solutions += 1
        
        user.save()
        solution.save()
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
        