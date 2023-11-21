from django.contrib import admin
from .models import *
# Register your models here.


admin.site.register(Author)

    
@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ['id','title']
    prepopulated_fields = {"slug":("title",)}
    
    
@admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):
    list_display = ['id','title']
    prepopulated_fields = {"slug":("title",)}
    
    
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['id','title','author',"like","dislike"]
    list_filter = ["author","genre"]
    search_fields = ["title","author"]
    prepopulated_fields = {"slug":("title",)}
    
