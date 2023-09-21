from django import forms 

from .models import Service, Order


class ServiceAddForm(forms.ModelForm):
    
    class Meta:
        model = Service
        fields = "__all__"
        widgets = {
            'name':forms.TextInput(attrs={"class":"form-control"}),
            'price':forms.TextInput(attrs={"class":"form-control"}),
        }
        
        
        
class OrderAddForm(forms.ModelForm):
    
    class Meta:
        model = Order
        fields = "__all__"
        widgets = {
            'name':forms.TextInput(attrs={"class":"form-control"}),
            'service_type':forms.Select(attrs={"class":"form-control"}),
            'price':forms.TextInput(attrs={"class":"form-control"}),
            'status':forms.Select(attrs={"class":"form-control"}),
            'car':forms.TextInput(attrs={"class":"form-control"}),
            'worker':forms.CheckboxSelectMultiple(attrs={"class":"form-control"}),
            'customer_name':forms.TextInput(attrs={"class":"form-control"}),
            'customer_phone':forms.TextInput(attrs={"class":"form-control"}),
            'discount':forms.TextInput(attrs={"class":"form-control"}),
            
            # 'status':forms.TextInput(attrs={"class":"form-control"}),   
        }
        
        


class WorkerAddForm(forms.ModelForm):
    
    class Meta:
        model = Service
        fields = "__all__"
        widgets = {
            'name':forms.TextInput(attrs={"class":"form-control"}),
            'phone':forms.NumberInput(attrs={"class":"form-control"}),
            'address':forms.TextInput(attrs={"class":"form-control"}),
            'balance':forms.TextInput(attrs={"class":"form-control"}),
            'balance_status':forms.Select(attrs={"class":"form-control"}),
            'work_count':forms.TextInput(attrs={"class":"form-control"}),
        }
