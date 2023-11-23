from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic import ListView
from django.contrib import messages
from .models import Author,Book,Genre,Language

# Create your views here.



class BookListView(ListView):
    model = Book
    
def init_session_like_list(request):
    request.session.modified = True
    try:
        return request.session["liked_books"]
    except:
        request.session["liked_books"] = []
    return request.session["liked_books"]
    
    

def set_reaction(request,book_id,action):
    like_list = init_session_like_list(request)
    if book_id in like_list:
        messages.add_message(request,messages.INFO,"Siz bu kitobga reaksiya bildirgansiz.")
    else:
        book = Book.objects.get(id=book_id)
        if action == "like":
            book.like += 1
            like_list.append(book.id)
            book.save()
        else:
            book.dislike += 1
            like_list.append(book.id)
            book.save()
            
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))