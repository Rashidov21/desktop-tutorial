from django.urls import path 

from .views import HomePageView

app_name = 'forum'

urlpatterns = [
    path('', HomePageView.as_view(), name='home')
]
