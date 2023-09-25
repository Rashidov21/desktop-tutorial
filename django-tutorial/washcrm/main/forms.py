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
        exclude = ['price','name']
        widgets = {
            'name':forms.TextInput(attrs={"class":"form-control"}),
            'service_type':forms.SelectMultiple(attrs={"class":"form-control"}),
            # 'price':forms.TextInput(attrs={"class":"form-control"}),
            'status':forms.Select(attrs={"class":"form-control"}),
            'car':forms.TextInput(attrs={"class":"form-control"}),
            'worker':forms.SelectMultiple(attrs={"class":"form-control"}),
            'customer_name':forms.TextInput(attrs={"class":"form-control"}),
            'customer_phone':forms.TextInput(attrs={"class":"form-control"}),
            'discount':forms.TextInput(attrs={"class":"form-control"}),
            'end_date':forms.DateInput(attrs={"class":"form-control date-input", 'type':'date'}),
            'end_time':forms.TimeInput(attrs={"class":"form-control date-input", 'type':'time'})
            # 'status':forms.TextInput(attrs={"class":"form-control"}),   
        }
    
    def save(self, commit=True):
        services_price = sum([serv.price for serv in self.cleaned_data.get("service_type")])
        # self.instance.price = services_price
        self.instance.price = services_price - ((services_price / 100) * self.instance.discount)
        return super(OrderAddForm, self).save(commit)
    
    # def save(self):
    #     obj = self.save(commit=False)
    #     services_price = sum([serv.price for serv in self.cleaned_data.get("service_type")])
    #     print(services_price)
    #     # print(dir(self.instance))
    #     self.instance.price = services_price
    #     obj.save()
        
        


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
