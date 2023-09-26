from django.db import models
from django.urls import reverse
from django.utils.translation import gettext as _


class Service(models.Model):
    name = models.CharField(_("name"), max_length=50)
    price = models.PositiveIntegerField(default=0, blank=True)
    active = models.BooleanField(default=False)

    class Meta:
        verbose_name = _("Service")
        verbose_name_plural = _("Services")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Service_detail", kwargs={"pk": self.pk})
    
    
class Worker(models.Model):
    name =models.CharField(_("name"), max_length=50)
    phone = models.CharField(max_length=15,blank=True)
    address = models.CharField(max_length=100,blank=True)
    balance = models.IntegerField(default=0)
    balance_status = models.CharField(max_length=20,blank=True)
    work_count =models.PositiveIntegerField(default=0, blank=True)
    debt = models.PositiveIntegerField(default=0, blank=True, null=True)


    

    class Meta:
        verbose_name = _("Worker")
        verbose_name_plural = _("Workers")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Worker_detail", kwargs={"pk": self.pk})
        



class Order(models.Model):
    STATUSES = (
        ('inproccess','In proccess'),
        ('waiting','Waiting'),
        ('doned','Doned'),
    )
    
    name  = models.CharField(_("name"),max_length=150, blank=True)
    service_type = models.ManyToManyField(Service, related_name='services')
    price = models.PositiveSmallIntegerField(default=0, blank=True)
    status = models.CharField(
        max_length=50,
        choices=STATUSES,
        blank=True
    )
    car = models.CharField(max_length=150,blank=True)
    worker = models.ManyToManyField(Worker, related_name='workers')
    sart_time  = models.DateTimeField(auto_now_add=True)
    end_date = models.DateField(blank=True,null=True)
    end_time = models.TimeField(blank=True,null=True)
    customer_name = models.CharField(max_length=150,blank=True)
    customer_phone =models.CharField(max_length=20,blank=True)
    discount = models.PositiveSmallIntegerField(default=0)
    payed = models.BooleanField(default=False)
    active = models.BooleanField(default=False)
    
    def get_discount_price(self):
        price = self.price
        discount_price = (self.price / 100) * self.discount
        return self.price - discount_price 
    
    def get_main_price(self):
        return sum([serv.price for serv in self.service_type.all()])
    

    class Meta:
        verbose_name =_("Order")
        verbose_name_plural =_("Orders")
        # ordering = ['payed']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Order_detail", kwargs={"pk": self.pk})
    
class Balance(models.Model):
    orders = models.ForeignKey(Order, on_delete=models.PROTECT, related_name='orders', null=True)
    balance = models.PositiveIntegerField(default=0)
    

    class Meta:
        verbose_name = _("Balance")
        verbose_name_plural = _("Balances")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Balance_detail", kwargs={"pk": self.pk})
    

class Output(models.Model):
    name = models.CharField(max_length=50,blank=True)
    comment = models.TextField(blank=True)
    amount = models.PositiveSmallIntegerField(default=0,blank=True)
    workers_debt = models.ForeignKey(Worker, on_delete=models.CASCADE, related_name='worker_debt')
    
    class Meta:
        verbose_name = _("Output")
        verbose_name_plural = _("Outputs")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Balance_detail", kwargs={"pk": self.pk})