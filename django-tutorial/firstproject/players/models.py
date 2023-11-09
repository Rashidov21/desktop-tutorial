from django.db import models
from django_countries.fields import CountryField


# Create your models here.
class Club(models.Model):
    name = models.CharField(max_length=100)
    country = CountryField()
    head_coach = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='club_logos/')
    
    
    def __str__(self):
        return str(self.name)
    
    

class Player(models.Model):
    POSITIONS = (
        ("gk","GoalKeeper"),
        ("df","Defender"),
        ("mid","Middle defender"),
        ("fw","Forward"),
        ("st","Striker"),
    )
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    birthday = models.DateField(blank=False)
    age = models.PositiveSmallIntegerField(default=0)
    country = CountryField()
    club = models.ForeignKey(Club,on_delete=models.PROTECT, related_name="players")
    position = models.CharField(max_length=50, choices=POSITIONS)
    height = models.PositiveSmallIntegerField(default=0)
    weight = models.PositiveSmallIntegerField(default=0)
    
    def __str__(self):
        return str(self.name + " " + self.surname)
    
    