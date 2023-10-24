from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login


from .models import User
# Create your views here.


def register(request):
    template_name = 'auth/register.html'
    data = {}
    if request.method == 'POST':
        username = request.POST.get("username")
        pass_1 = request.POST.get("password1")
        pass_2 = request.POST.get("password2")
        if username and pass_1 and pass_2:
            if pass_1 == pass_2:
                User.objects.create(
                    username=username,
                    password=pass_1
                )
                user = authenticate(username=username, password=pass_1)
                login(request, user)
                messages.add_message(request,messages.SUCCESS,"Welcome!")
                return redirect("/")
        else:
            messages.add_message(request,messages.SUCCESS,"Password didnt match!")
            return redirect("/")
    
    return render(request, template_name, context=data)