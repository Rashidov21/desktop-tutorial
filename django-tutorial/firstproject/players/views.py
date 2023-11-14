from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic import ListView
from .models import Club,Player

from .forms import CountryForm
# Create your views here.

# ListView -> objects.all() -> SELECT * FROM your_tabel
class PLayerListView(ListView):
    model = Player
    # queryset = Player.objects.filter(height__gte=190) # height >= 190
    # queryset = Player.objects.filter(height__lte=180)  # height <= 180
    # context_object_name = "players"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["clubs"] = Club.objects.all()
        context["form"] = CountryForm()
        context["filtered_objects"] = Player.objects.filter(age__gte=25,height__gte=180,weight__lte=80)


        # CREATE 
        # Club.objects.create(name="Rubin",country="Russia",head_coach="Magomed Ismailov", logo="")
        
        # READ
        # print(Club.objects.get(name="Navbahor")) # get - olish , faqat 1 ta obyekt olinadi
        # print(Club.objects.get(name="Navbahor"))
        # print(Club.objects.get_or_create()) # get_or_create - olish va agar mavjud bolmasa yozish 
        # print(Club.objects.all()) # jadvaldagi barcha obyektlarni olish
        # print(Club.objects.filter(country="uz")) # saralash
        # print(Club.objects.exclude(country="uz")) # korsatilganlaridan tashqari boshqalarini olish
        # print(type(Club.objects.in_bulk()))
        
        # UPDATE 
        # nfc = Club.objects.get(name="Navbahor")
        # nfc.name = "Navbahor FC"
        # nfc.save()
        
        # Club.objects.filter(name="Navbahor").update(name='Navbahor Football Club')
        # update_or_create()
        
        # DELETE 
        # nfc = Club.objects.get(name="Navbahor")
        # nfc.delete() 
        
        
        return context
    
    
class ClubPLayerListView(ListView):
    model = Player
    
    
    def get_queryset(self):
        qs = super().get_queryset()
        club = Club.objects.get(name=self.kwargs.get("name"))
        qs = Player.objects.filter(club=club)
        return qs
    