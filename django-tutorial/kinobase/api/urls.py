from django.urls import include, path
from rest_framework import routers
from . import views

app_name = 'api'

router = routers.DefaultRouter()
router.register('movies', views.MovieListViewSet,basename='Movie')


# Подключите наш API , используя автоматическую маршрутизацию URL .
# Кроме того, мы включаем логин URLs для просматриваемого API .
urlpatterns = [
    path('api-auth/', include(router.urls)),
]