from django.urls import path 
from . import views
app_name = 'main'

urlpatterns = [
    path("", views.ProductListView.as_view(), name='home'),
    path("add-to-wishlist/<int:product_id>", views.addtowishlist, name='addtowishlist'),
    path("wishlist/", views.MyWishListView.as_view(), name='wishlist')
]