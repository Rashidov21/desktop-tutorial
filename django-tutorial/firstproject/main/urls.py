from django.urls import path

# my views 
from .import views

app_name = 'main'

urlpatterns = [
    path('', views.home_page , name='home'),
    
    path('get/', views.get_response, name='test_response'),
    path('404/', views.handler404, name='page_not_found'),
    path('redirect/', views.user_redirect, name='redirect'),
]
