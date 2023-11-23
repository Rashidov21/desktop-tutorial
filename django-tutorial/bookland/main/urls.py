from django.urls import path
from .import views

app_name = "main"

urlpatterns = [
    path("", views.BookListView.as_view(), name='book_list'),
    path("reaction/<int:book_id>/<str:action>", views.set_reaction, name='reaction')
]
