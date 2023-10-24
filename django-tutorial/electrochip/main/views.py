from django.shortcuts import render
from .models import Post
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