from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['title','icon']
    prepopulated_fields = {"slug":('title',)}
    
    
@admin.register(Problem)
class ProblemAdmin(admin.ModelAdmin):
    list_display = ['title','author','solved']
    list_filter = ['tags', 'solved']
    prepopulated_fields = {"slug":('title',)}
    
    
@admin.register(Solve)
class SolveAdmin(admin.ModelAdmin):
    list_display = ['user','problem']
