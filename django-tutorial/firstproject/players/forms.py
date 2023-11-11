from django import forms
from django_countries.fields import CountryField


class CountryForm(forms.Form):
    country = CountryField().formfield()
    