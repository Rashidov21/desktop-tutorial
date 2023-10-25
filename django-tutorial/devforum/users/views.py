from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login

from .forms import UserRegisterForm
from .models import User
# Create your views here.


def register(request):
    template_name = 'auth/register.html'
    
    form = UserRegisterForm()
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.add_message(request,messages.SUCCESS,"Success!")
            return redirect(f"/users/login/")
        else:
            messages.add_message(request,messages.SUCCESS,"Password didnt match!")
            return redirect("/users/register/")
    data = {
        "form":form
    }
    return render(request, template_name, context=data)


def profile_view(request, username):
    user = User.objects.get(username=username)
    return render(request, 'auth/profile.html',context={'user':user})