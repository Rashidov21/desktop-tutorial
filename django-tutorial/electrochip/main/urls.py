from django.urls import path 

from .import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home')
]
