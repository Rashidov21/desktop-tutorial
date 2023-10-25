from django.urls import path 
from .views import register, profile_view
from django.contrib.auth.views import (
    LoginView,
    LogoutView,
)

app_name = 'users'

urlpatterns = [
    path('login/', LoginView.as_view(
        template_name='auth/login.html',
        ), name='login'),
    path('logout/', LogoutView.as_view(
        template_name='auth/logout.html',
        ), name='logout'),
    
     path('register/', register, name='register'),
     
     path("profile/<str:username>", profile_view, name='profile')
]
