from django.urls import path 

from .import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about , name='about'),
    path('service/', views.service , name='service'),
    path('blog/', views.blog , name='blog'),
    path('contact/', views.contact , name='contact'),
    path('set-contact-data/', views.set_contact_data , name='set_contact_data'),
]
