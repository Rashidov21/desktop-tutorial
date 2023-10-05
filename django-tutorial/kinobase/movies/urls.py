from django.urls import path
from .import views

from django.contrib.auth.views import (
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView
)

app_name = 'movies'

urlpatterns = [
    path('', views.HomeView.as_view(), name='movie_list'),
    path('detail/<slug:slug>', views.MovieDetailView.as_view(), name='detail'),
    
    
    # account 
    path('login/',views.user_login, name='login' ),
    path('register/',views.register, name='register' ),
    path('password-reset/',PasswordResetView.as_view(
        template_name='auth/password_reset.html'), 
         name='password_reset' ),
    path('password-reset-done/', PasswordResetDoneView.as_view(
        template_name='auth/password_reset_done.html',
        name='password_reset_done')
         ),
]
