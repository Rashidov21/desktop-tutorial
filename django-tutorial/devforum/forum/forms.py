from django import forms
from .models import Problem,Solve
from users.models import User


class AddSolveForm(forms.ModelForm):
    
    class Meta:
        model = Solve
        fields = ["text"]