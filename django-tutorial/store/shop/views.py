from django.shortcuts import render,redirect

from django.views.generic.base import View 
from django.views.generic import ListView

from .models import *
# Create your views here.

def cart_init(request):
    try:
        cart = Cart.objects.get(id=request.session.get('user_cart_id'))
    except:
        cart = Cart.objects.create() # yangi cart object hosil qilish
        request.session['user_cart_id'] = cart.id
    return cart



class CartView(View):
    
    def get(self, request):
        cart = cart_init(request)
        
        return render(request, 'store/card.html', {"cart":cart})

class HomePageView(View):
    
    
    def get(self,request):
        object_list = Product.objects.all()
        categories = Category.objects.all()
        data = {
            "object_list":object_list,
            "categories":categories
        }
        return render(request, 'main.html', context=data)
    
    def post(self,request):
        pass
    



class AddToCartView(View):
    
    def get(self, request, product_id):
        cart = cart_init(request)
        if cart:
            cart.add(product_id)
            return redirect('/')
        
        return render(request, 'cart.html', {"cart":cart})

def cart_item_update(request):
    cart = cart_init(request)
    obj_id = int(request.GET.get('item_id'))
    qty = request.GET.get("qty")
    action = request.GET.get("action")
    if action == 'plus':
        cart.update_item(obj_id,qty)
    else:
        cart.delete_item(obj_id,qty)
        
    return redirect('/cart/')

def delete_item(request,item_id,qty):
    cart = cart_init(request)
    cart.delete_item(item_id,qty)
    return redirect('/cart/')

def clear_cart(request):
    cart = cart_init(request)
    cart.clear_cart()
    return redirect('/cart/')