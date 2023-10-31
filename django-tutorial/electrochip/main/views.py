from django.shortcuts import render, HttpResponseRedirect
from django.contrib import messages
from .models import Post,Contact
# Create your views here.


def home(request):
    """SELECT * FROM posts"""
    posts = Post.objects.all() # QuerySet - omborga sorov
    # print(posts)
    # print(dir(posts))
    # for post in posts:
    #     print(post.id)
    data = {
        'object_list':posts,
        'page_title':"Electrochip site Django."
    } 
    return render(request, 'index.html', context=data)


def about(request):
    return render(request, 'about.html')


def service(request):
    return render(request, 'service.html')


def blog(request):
    return render(request, 'blog.html')


def contact(request):
    return render(request, 'contact.html')


def set_contact_data(request):
    name = request.POST.get("name")
    email = request.POST.get("email")
    phone = request.POST.get("phone")
    message = request.POST.get("message")
    if all([name,email,phone,message]):
        Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )
        messages.add_message(request,messages.SUCCESS,"Succesfully !")
        #qaysi manzildan sorov kelib tushsa shu manzilga qaytariladiz
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        messages.add_message(request,messages.SUCCESS,"Error !")
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
        


    # print(request.POST.get("name"))
    # print(request.POST.get("email"))
    # print(request.POST.get("phone"))
    # print(request.POST.get("message"))
    # print(dir(request))
    # print(request.get_host())
    # print(request.get_port())
    # print(request.path)
    # print(request.method)
    # print(request.POST)
    # print(request.GET)