from django.urls import path

# my views 
from .import views

app_name = 'players'

urlpatterns = [
    path('', views.PLayerListView.as_view() , name='player_list'),
    path('club/<str:name>/players', views.ClubPLayerListView.as_view() , name='club_player_list'),
    
]
