from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Service)
admin.site.register(Worker)
admin.site.register(Order)
admin.site.register(Output)
admin.site.register(Balance)