from django.urls import path 

from .views import *

app_name = 'forum'

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    
    # FORUM 
    path('add/', AddProblemView.as_view(), name='add_problem'),
    path('detail/<pk>', ProblemDetailView.as_view(), name='detail'),
    path('reaction/<str:subject>/<int:pk>/<str:reaction>', AddUserReactuion.as_view(), name='add_reaction'),
    path('right-solution/<int:user_id>/<int:solution_id>', SetRighUsertSolution.as_view(), name='user_right_solution')
]
