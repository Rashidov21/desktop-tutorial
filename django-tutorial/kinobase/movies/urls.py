from django.urls import path, reverse_lazy
from .import views

from django.contrib.auth.views import (
    LoginView,
    LogoutView,
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView
)

app_name = 'movies'

urlpatterns = [
    # movie 
    path('', views.HomeView.as_view(), name='movie_list'),
    path('detail/<slug:slug>', views.MovieDetailView.as_view(), name='detail'),
    
    path('category/<slug>/', views.CategoryListView.as_view(), name='category_list'),
    path('genre/', views.GenreListView.as_view(), name='genre_list'),

    path('filter/<str:sort>', views.MovieFilterView.as_view(), name='movie_filter'),
    
    path("favorite/add/<user_id>/<movie_id>", views.add_to_favorite_movies, name='add_favorite'),
    
    path('favorites/<id>', views.UserFavoriteMovies.as_view(), name='favorites'),
    path('history/', views.UserMovieHistory.as_view(), name='history'),
    
    
    # account 
    path('login/',LoginView.as_view(
        template_name='auth/login.html'), name='login' ),
    
    path('profile/<str:username>', views.ProfileView.as_view(), name='profile'),
    
    path('logout/',views._logout, name='logout' ),
    
    path('register/',views.register, name='register' ),
    
    path('password-reset/',PasswordResetView.as_view(
        template_name='auth/password_reset.html',
        html_email_template_name='auth/password_reset_email.html',
        email_template_name='auth/password_reset_email.html',
        success_url=reverse_lazy('movies:password_reset_done')),
         name='password_reset' ),
    
    path('password-reset-done/', PasswordResetDoneView.as_view(
        template_name='auth/password_reset_done.html',
        
         ),name='password_reset_done'),
    
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(
        template_name='auth/password_reset_confirm.html',
        success_url=reverse_lazy('movies:password_reset_complete')),
         name='password_reset_confirm'),
    
      path('password-reset-complete/', PasswordResetCompleteView.as_view(
        template_name='auth/password_reset_complete.html',
        
         ),name='password_reset_complete'),
      
      
      
      
      
      path('add/new/user', views.AddNewUser.as_view(), name='add_new_user')
]
