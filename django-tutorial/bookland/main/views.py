from django.shortcuts import render
from django.views.generic import ListView

from .models import Author,Book,Genre,Language

# Create your views here.



class BookListView(ListView):
    model = Book
    
