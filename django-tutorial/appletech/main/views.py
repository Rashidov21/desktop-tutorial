from main.models import Device
from django.shortcuts import render
from django.views.generic import ListView
from django.views.generic.base import TemplateView
from django.http import HttpResponseRedirect

from .models import Banner, Brand, Device
def check_wish_list(request):
    request.session.modified = True
    try:
        return request.session["liked_products"]
    except:
        request.session["liked_products"] = []
    return request.session["liked_products"]


# Create your views here.
class ProductListView(ListView):
    model = Device
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["banner"] = Banner.objects.last()
        return context


def addtowishlist(request,product_id):
    my_list = check_wish_list(request)
    if product_id in my_list:
        print("Yes")
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    else:
        my_list.append(product_id)
        print("OK")
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))
    
class MyWishListView(TemplateView):
    template_name = 'saved.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        wishlist = self.request.session['liked_products']
        objs = []
        for i in wishlist:
            p = Device.objects.get(id=i)
            objs.append(p) 
        context["object_list"] = objs
        return context
    