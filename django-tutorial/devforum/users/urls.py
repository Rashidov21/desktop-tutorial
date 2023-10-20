from django.urls import path 
from django.contrib.auth.views import (
    LoginView
)

app_name = 'users'

urlpatterns = [
    path('login/', LoginView.as_view(
        template_name=''), name='login')
]
