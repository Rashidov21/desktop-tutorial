from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('name',)}
    
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug':('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price','discount', 'in_stock')
    list_editable = ('price', 'discount')
    list_filter = ('name', 'category', 'price')
    
    search_fields = ('name', 'description')
    
    prepopulated_fields = {'slug':('name',)}
    
    