from django.db import models

# Create your models here.
class Author(models.Model):
    full_name = models.CharField(
        verbose_name="Kitob muallifi",
        max_length=100,
        help_text="Muallif ismini kiriting.")
    date_of_birthday = models.DateField(
        verbose_name="Tug'ilgan sanasi",
        help_text="Tug'ilgan sanasini kiriting.",
        blank=True,
        null=True)
    date_of_death = models.DateField(
        verbose_name="Vafot etgan sanasi",
        help_text="Vafot etgan sanasini kiriting.",
        blank=True,
        null=True)
    country = models.CharField(
        verbose_name="Millati",
        help_text="Muallif millati.",
        max_length=100,
        blank=True)
    
    def __str__(self):
        return self.full_name
    
class Genre(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField("*", max_length=100,unique=True)
    
    def __str__(self):
        return self.title


class Language(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField("*", max_length=100,unique=True)
    
    def __str__(self):
        return self.title
    
class Book(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField("*", max_length=100,unique=True)
    genre = models.ForeignKey(
        Genre,
        on_delete=models.PROTECT,
        related_name="books",null=True) # birga ko'p ulash
    author = models.ForeignKey(
        Author,
        on_delete=models.PROTECT,
        related_name="author_books",null=True) # birga ko'p ulash
    language = models.ForeignKey(
        Language,
        on_delete=models.PROTECT,null=True) # birga ko'p ulash
    summary = models.TextField(max_length=1000,blank=True)
    like = models.PositiveSmallIntegerField(default=0)
    dislike = models.PositiveSmallIntegerField(default=0)
    
    
    def __str__(self):
        return self.title
    
    def get_rating(self):
        return  range(round((self.like / (self.dislike+self.like)) * 100) // 10)

                
    
    