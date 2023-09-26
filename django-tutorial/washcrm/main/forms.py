from django import forms 

from .models import Service, Order, Worker, Output


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
        # print(self.cleaned_data)
        services_price = sum([serv.price for serv in self.cleaned_data.get("service_type")])
        worker = self.cleaned_data.get("worker")
        print(len(worker))
        for w in worker:
            # agar ishchi 2 tadan kop bolsa 50% ni ular soniga bolib yozamiz
            if len(worker) > 1:
                balance = 0
                debt = w.debt             
                balance += (services_price / 2) - w.debt
                w.debt -= ((services_price / 2) - balance) - debt
                w.balance += balance
                w.save()
            # agar bitta bosa summani 50% ni yozamiz
            else:
                balance = 0
                debt = w.debt            
                balance += (services_price / 2) - w.debt
                w.debt = ((services_price / 2) - balance) - debt
                w.balance += balance
                w.save()
            
        # worker.save()-
        # self.instance.price = services_price
        # print(self.save(data=1))
        self.instance.price = (services_price / 2) - ((services_price / 100) * self.instance.discount)
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
        model = Worker
        fields = "__all__"
        exclude = [
            'balance_status',
        ]
        widgets = {
            'name':forms.TextInput(attrs={"class":"form-control"}),
            'phone':forms.TextInput(attrs={"class":"form-control"}),
            'address':forms.TextInput(attrs={"class":"form-control"}),
            'balance':forms.TextInput(attrs={"class":"form-control"}),
            'work_count':forms.TextInput(attrs={"class":"form-control"}),
            'debt':forms.TextInput(attrs={"class":"form-control"}),
        }


class OutputAddForm(forms.ModelForm):
    
    class Meta:
        model = Output
        fields ='__all__'
        widgets = {
            'name':forms.TextInput(attrs={"class":"form-control"}),
            'comment':forms.TextInput(attrs={"class":"form-control"}),
            'amount':forms.NumberInput(attrs={"class":"form-control"}),
        }
    def save(self, commit=True):
        debt = self.cleaned_data['amount']
        instance_worker = self.cleaned_data['workers_debt']
        print(instance_worker)
        # print(self.cleaned_data)
        # print(type(instance_worker))
        instance_worker.debt += debt
        instance_worker.save()
        return super(OutputAddForm, self).save(commit)