from django.db import models

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=150)
    logo = models.ImageField(upload_to="brand_logos/", blank=True)

    def __str__(self):
        return self.name



class Device(models.Model):
    TYPES = (
        ('chexol',"Chexol"),
        ('naushnik',"Naushnik"),
        ('zaryadnik',"Zaryadka"),
        ('qurilma',"Qurilma"),
        ('boshqa',"Boshqalar"),
    )
    brand = models.ForeignKey(Brand, on_delete=models.PROTECT, related_name='devices')
    device_type = models.CharField(max_length=100, choices=TYPES)
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    price = models.PositiveSmallIntegerField(default=0)
    discount = models.PositiveSmallIntegerField("%\da",default=0)

    def get_discount_price(self):
        price = self.price - ((self.price / 100) * self.discount)
        return price
    
    def __str__(self):
        return self.name


class DeviceImages(models.Model):
    image = models.ImageField(upload_to="product_images/")
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name="images")


    def __str__(self):
        return self.device.name


class Banner(models.Model):
    title = models.CharField(max_length=150)
    image = models.ImageField(upload_to='banner_images/')

    def __str__(self):
        return self.title