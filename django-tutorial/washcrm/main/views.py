from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic.base import View
from django.views.generic.edit import CreateView, DeleteView
# Create your views here.
from django.contrib.messages.views import SuccessMessageMixin

from .models import Service,Worker,Order


# Forms with our Models akalar
from .forms import ServiceAddForm,OrderAddForm,WorkerAddForm


class DashboardView(View):
    template_name = 'index.html'
    
    def get(self,request,*args, **kwargs):
        data = {
            'services':Service.objects.all(),
            'workers':Worker.objects.all(),
            'orders':Order.objects.all().order_by('payed'),
        }
        return render(request,self.template_name,context=data)


# Services 
class AddServiceView(SuccessMessageMixin,CreateView):
    template_name = 'layouts/form_advanced.html'
    model = Service
    # fields = '__all__'
    form_class = ServiceAddForm
    # success_url = '/'
    
    # success_message = "O'xshadi!"
    
class AddOrderView(SuccessMessageMixin,CreateView):
    template_name = 'layouts/form_advanced.html'
    model = Order
    # fields = '__all__'
    form_class = OrderAddForm
    success_url = '/'


class AddWorkerView(SuccessMessageMixin,CreateView):
    template_name = 'layouts/form_advanced.html'
    model = Worker
    # fields = '__all__'
    form_class = WorkerAddForm
    # success_url = '/'
    
    
    
# Update views 
def update_service_view(request, id):
    context ={}
    obj = get_object_or_404(Service, id = id)
    form = ServiceAddForm(request.POST or None, instance = obj)
    if form.is_valid():
        form.save()
        return redirect("/")
 
    # add form dictionary to context
    context["form"] = form
 
    return render(request, "layouts/form_advanced.html", context)
    
    
    
def update_order_view(request, id):
    context ={}
    obj = get_object_or_404(Order, id = id)
    form = OrderAddForm(request.POST or None, instance = obj)
    if form.is_valid():
        form.save()
        return redirect("/")
 
    # add form dictionary to context
    context["form"] = form
 
    return render(request, "layouts/form_advanced.html", context)

def update_worker_view(request, id): 
    context ={}
    obj = get_object_or_404(Worker, id = id)
    form = WorkerAddForm(request.POST or None, instance = obj)
    if form.is_valid():
        form.save()
        return redirect("/")
 
    # add form dictionary to context
    context["form"] = form
 
    return render(request, "layouts/form_advanced.html", context)




# Delete views 
class OrderDeleteView(DeleteView):
    model = Order
    success_url = '/'
    template_name = 'layouts/delete.html'
    
    
class WorkerDeleteView(DeleteView):
    model = Worker
    success_url = '/'
    template_name = 'layouts/delete.html'
# def delete_order_view(request, pk):
#     context ={}
#     # obj= Order.objects.get(id=pk)
#     obj = get_object_or_404(Order, id=pk)
#     if request.method =="POST":
#         obj.delete()
#         return redirect("/")
 
#     return render(request, "delete.html", context)