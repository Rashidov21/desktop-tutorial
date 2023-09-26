from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic.base import View
from django.views.generic.edit import CreateView, DeleteView
from django.utils.timezone import datetime
# Create your views here.
from django.contrib.messages.views import SuccessMessageMixin

from .models import Service,Worker,Order, Output

from django.http import HttpResponse
# Forms with our Models akalar
from .forms import ServiceAddForm,OrderAddForm,WorkerAddForm, OutputAddForm


class DashboardView(View):
    template_name = 'index.html'
    
    def get(self,request,*args, **kwargs):
        worker = Worker.objects.get(id=2)
        print(worker.worker_debt)
        data = {
            'services':Service.objects.all(),
            'workers':Worker.objects.all(),
            'orders':Order.objects.all().order_by('payed'),
            'outputs':Output.objects.all(),
        }
        return render(request,self.template_name,context=data)


# Services 
class AddServiceView(SuccessMessageMixin,CreateView):
    template_name = 'layouts/form_advanced.html'
    model = Service
    # fields = '__all__'
    form_class = ServiceAddForm
    success_url = '/'
    
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
    success_url = '/'
    
    
    
class AddOutputView(CreateView):
    template_name = 'layouts/form_advanced.html'
    model = Output
    form_class = OutputAddForm
    success_url = '/'
    
    
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

def update_output_view(request, id):
    context ={}
    obj = get_object_or_404(Output, id = id)
    form = OutputAddForm(request.POST or None, instance = obj)
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



def order_filtering(request, sort_by):
    today = datetime.today()
    if sort_by == 'today':
        orders = Order.objects.filter(sart_time__day=today.day)
        print(orders)
    if sort_by == 'month':
        orders = Order.objects.filter(sart_time__month=today.month)
        print(orders)
    if sort_by == 'year':
        orders = Order.objects.filter(sart_time__year=today.year)
        print(orders)

    return HttpResponse("sorting") 
    
class WorkerDeleteView(DeleteView):
    model = Worker
    success_url = '/'
    template_name = 'layouts/delete.html'


class OutputDeleteView(DeleteView):
    model = Output
    success_url = '/'
    template_name = 'layouts/delete.html'