
from django.contrib import admin
from django.urls import path , include

# include - bu boshqa app url larini chaqirib ulab beruvchi method 

urlpatterns = [
    path('admin/', admin.site.urls),
    # main app url ini "main" nomi bilan project ga qoshish
    path('', include("main.urls", namespace='main')),
]
