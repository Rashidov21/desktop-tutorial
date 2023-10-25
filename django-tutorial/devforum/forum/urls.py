from django.urls import path 

from .views import HomePageView,AddProblemView

app_name = 'forum'

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    
    # FORUM 
    path('add/', AddProblemView.as_view(), name='add_problem')
]
