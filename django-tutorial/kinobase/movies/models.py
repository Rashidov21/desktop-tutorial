import datetime

from django.db import models
from django.utils.translation import gettext as _

from django.contrib.auth.models import User

# Outer libs 
from django_countries.fields import CountryField
from django_resized import ResizedImageField

# Create your models here.
class Category(models.Model):
   name = models.CharField(_("Category"), max_length=50)
   slug = models.SlugField(_("*"), max_length=50, unique=True)
   
   def __str__(self):
       return self.name


class Genre(models.Model):
   name = models.CharField(_("Genre"), max_length=100)
   slug = models.SlugField(_("*"), max_length=100, unique=True)
   
   def __str__(self):
       return self.name
  


class Author(models.Model):
    name = models.CharField(_("Name"), max_length=100)
    slug = models.SlugField(_("*"), max_length=100, unique=True)
  
    
    def __str__(self):
       return self.name

QUALITIES = (
    ('webrip', "WEBRip"),
    ('bdrip', "BDRip"),
    ('ts', "TS"),
    ('hdrip', "HDRip"),
)

class Movie(models.Model):
    current_year = datetime.datetime.now().year
    
    category = models.ForeignKey(Category, on_delete=models.PROTECT, null=True)
    genre = models.ManyToManyField(Genre)
    title = models.CharField(_("Name"), max_length=100)
    slug = models.SlugField(_("*"), max_length=100, unique=True)
    poster = ResizedImageField(size=[360,530],upload_to='movie_posters/')
    year = models.PositiveSmallIntegerField(default=current_year)
    country = CountryField(multiple=True,blank_label="(select country)")
    quality = models.CharField(_("Quality"), max_length=50,choices=QUALITIES)
    dubbed = models.BooleanField(default=True)
    duration = models.DurationField(blank=True)
    rating = models.PositiveSmallIntegerField(default=0)
    description = models.TextField(blank=True)
    views = models.PositiveSmallIntegerField(_("Movie views"), default=0)
    published_time = models.DateTimeField(blank=True)
    related_movies = models.ManyToManyField('self', blank=True)
    
    # director = models.ManyToManyField(Author)
    # producer = models.ManyToManyField(Author)
    # screenwriter = models.ManyToManyField(Author)
    # composer = models.ManyToManyField(Author)
    # painter = models.ManyToManyField(Author)
    
    file_url = models.URLField(blank=True)

    def __str__(self):
       return self.title


class Roles(models.Model):
    author = models.ManyToManyField(Author)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    
    actor = models.BooleanField(default=False)
    director = models.BooleanField(default=False)
    producer = models.BooleanField(default=False)
    screenwriter = models.BooleanField(default=False)
    composer = models.BooleanField(default=False)
    painter = models.BooleanField(default=False)
    
    def __str__(self):
       return f"{self.author} - {self.movie.title}"
 
 

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments', null=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE,related_name='movie_comments', null=True)
    comment_time = models.DateTimeField(auto_now_add=True)
    comment = models.CharField(max_length=200)
    
    def __str__(self):
       return self.user.first_name
   
   
   

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, related_name='profile')
    image = ResizedImageField(size=[100,100],upload_to='users/', blank=True)
    favorites = models.ManyToManyField(Movie, related_name='favorites',blank=True)
    
    def __str__(self):
       return f"{self.user.first_name}" if self.user.first_name else f"{self.user.username}"