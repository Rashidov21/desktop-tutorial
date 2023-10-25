# from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from users.models import User


class UserRegisterForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ('username','password1','password2')
        exclude = ('email',)