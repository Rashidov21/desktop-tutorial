from django.shortcuts import render
# responses 
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseNotFound

from .forms import UserForm, RegisterForm
# Create your views here.

# controller method 
def home_page(request):
    # print(request.POST)
    print(request.POST.get("name"))
    print(request.POST.get("age"))
    form = UserForm()
    reg_form = RegisterForm()
    data = {
        'page_title':'Hello Python !',
        'form':form,
        'reg_form':reg_form,
        }
    return render(request, template_name='index.html',context=data)





def get_response(request):
    return HttpResponse('<h3>Response</h3>')


def handler404(request):
    return HttpResponseNotFound("Page not found!")


def user_redirect(request):
    return HttpResponseRedirect("/")