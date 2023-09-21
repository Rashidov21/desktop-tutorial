from django.shortcuts import render
from django.views.generic.base import View
# Create your views here.

from .models import Service,Worker


class DashboardView(View):
    template_name = 'index.html'
    
    def get(self,request,*args, **kwargs):
        data = {
            'services':Service.objects.all(),
            'workers':Worker.objects.all(),
        }
        return render(request,self.template_name,context=data)