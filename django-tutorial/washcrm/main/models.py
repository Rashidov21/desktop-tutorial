from django.db import models
from django.urls import reverse
from django.utils.translation import gettext as _



# Create your models here.
class Service(models.Model):
    name = models.CharField(_("Name"), max_length=50)
    price = models.PositiveIntegerField(_("Service price"),default=0)
    active = models.BooleanField(default=True)
    

    class Meta:
        verbose_name = _("Service")
        verbose_name_plural = _("Services")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Service_detail", kwargs={"pk": self.pk})
    
    
class Order(models.Model):
    name = models.CharField(_("Name"), max_length=50)
    servi = models.PositiveIntegerField(_("Service price"),default=0)
    active = models.BooleanField(default=True)
    

    class Meta:
        verbose_name = _("Order")
        verbose_name_plural = _("Orders")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Service_detail", kwargs={"pk": self.pk})
