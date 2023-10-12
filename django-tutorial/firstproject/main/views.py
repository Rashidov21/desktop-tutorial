from django.shortcuts import render

# Create your views here.

# controller method 
def home_page(request):
    data = {'page_title':'Hello Python !'}
    return render(request, template_name='index.html',context=data)