from django import forms
from django.contrib.auth import forms as auth_forms
from django_countries.widgets import CountrySelectWidget
from django.contrib.auth.models import User

from .models import Movie

class SelectCountryForm(forms.ModelForm):
    
    class Meta:
        model = Movie
        fields = ['country']
        widgets = {"country": CountrySelectWidget(attrs={'multiple':'', 'class':'form-select'})}

# class SignUpForm(auth_forms.UserCreationForm):
    
#     class Meta:
#         model = User
#         fields = ['username','email','password1','password2']
        
#         # widgets = {
#         #     'username'
#         # }
