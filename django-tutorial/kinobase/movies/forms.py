from django import forms
from django.contrib.auth import forms as auth_forms
from django.contrib.auth.models import User


class SignUpForm(auth_forms.UserCreationForm):
    
    class Meta:
        model = User
        fields = ['username','email','password1','password2']
        
        # widgets = {
        #     'username'
        # }