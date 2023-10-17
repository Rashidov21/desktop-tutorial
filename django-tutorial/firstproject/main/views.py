from django.shortcuts import render
# responses 
from django.http import HttpResponse,HttpResponseRedirect,HttpResponseNotFound
# Create your views here.

# controller method 
def home_page(request):
    data = {'page_title':'Hello Python !'}
    return render(request, template_name='index.html',context=data)

def get_response(request):
    return HttpResponse('<h3>Response</h3>')


def handler404(request):
    return HttpResponseNotFound("Page not found!")


def user_redirect(request):
    return HttpResponseRedirect("/")