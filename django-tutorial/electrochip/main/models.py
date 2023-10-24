from django.db import models
from django_resized import ResizedImageField
# Create your models here.
# Model - SQL jadvallarni Python class ko'rinishi 

# class nomi = Table name , Jadval nomi  
# class atributlari = Table column , jadval ustunlari



class Post(models.Model):
    title = models.CharField(verbose_name='Post title',max_length=256,blank=False)
    image = ResizedImageField(
        size=[570,400], 
        quality=60, 
        upload_to='resized_posts/', 
        force_format='PNG'
        )
    body = models.TextField()
    
    def __str__(self):
        return self.title
    
    
class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50,blank=True)
    phone = models.CharField(max_length=20)
    message = models.TextField()

    def __str__(self):
        return self.name
    
