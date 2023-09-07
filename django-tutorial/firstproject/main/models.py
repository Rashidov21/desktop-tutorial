from django.db import models

# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique=True)
    flag = models.ImageField(upload_to='flags/', default='default/no_flag.png')

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

    def __str__(self):
        return str(self.name)

# Club
class Club(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique=True)
    logo = models.ImageField(upload_to='club_logos/', default='default/club_logo.png')

    def __str__(self):
        return str(self.name)

class Player(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique=True)
    image = models.ImageField(upload_to='player_images/%Y/%m', default='default/no_user.png')
    country = models.ForeignKey(
        Country, on_delete=models.PROTECT, related_name='players_of_country')
    club = models.ForeignKey(
        Club, on_delete=models.PROTECT, related_name='players')
    age = models.PositiveIntegerField(default=0)
    rating = models.PositiveIntegerField(default=0)

    def __str__(self):
        return str(self.name)


