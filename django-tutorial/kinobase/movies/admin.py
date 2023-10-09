from django.contrib import admin
from .models import (
    Category,
    Genre,
    Author,
    Movie,
    Roles,
    Comment,
    Profile
)
# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug':('name',)}
    
@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug':('name',)}
    
    
    
@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    prepopulated_fields = {'slug':('name',)}
    
    
admin.site.register(Roles)

class MovieRoleStackedInline(admin.StackedInline):
    model = Roles
    # fields = "__all__"
    
@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ['title','slug']
    prepopulated_fields = {'slug':('title',)}
    inlines = [MovieRoleStackedInline]
    
admin.site.register(Comment)
admin.site.register(Profile)