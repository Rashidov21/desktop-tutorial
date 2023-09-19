from django.urls import path 
from . import views 


app_name = 'main'

urlpatterns = [
    path('', views.HomePageView.as_view(), name='home'),
    path('add/<int:product_id>', views.AddToCartView.as_view(), name='add_to_cart'),
    path('cart/', views.CartView.as_view(), name='cart'),
    path('cart/update/', views.cart_item_update, name='cart_update'),
    path('cart/delete/<int:item_id>/<int:qty>', views.delete_item, name='delete_item'),
    path('cart/clear/', views.clear_cart, name='clear_cart'),
    # path("category/<slug>", views.CategoryListView.as_view(), name='category_list'),
    
    # path('results/', views.SearchListView.as_view(), name='search')
]
