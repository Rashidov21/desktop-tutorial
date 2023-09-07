from django.urls import path 
from .import views 

app_name = 'main'

urlpatterns = [
    # domen nomidan song hech narsa yozilmasa views modulidagi homePageView kontroller method (funksiya) ishga tushadi aynan shu  funksiya userga response obyektini qaytarishi shart 
    path("", views.HomeView.as_view(), name='home'),
    path("about/", views.aboutPageView, name='about')
]
