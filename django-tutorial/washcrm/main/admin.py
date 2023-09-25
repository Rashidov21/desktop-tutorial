from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['car','price','payed','active','status']
    
    
    
admin.site.register(Service)
admin.site.register(Worker)
admin.site.register(Output)
admin.site.register(Balance)