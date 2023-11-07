from django import forms


class UserForm(forms.Form):
    name = forms.CharField(label="Name",required=False)
    age = forms.IntegerField(label="Your age.", required=False)

    
class RegisterForm(forms.Form):
    genders = (
        ("male","Male"),
        ("female","Female")
    )
    subjects_choice = (
        ("oop","OOP"),
        ("base","DataBase"),
        ("web","Web Technologies"),
        ("mobile","Android Dev"),
    )
    cities = (
        ("tash","Tashkent"),
        ("lon","London"),
        ("mos","Moscow"),
        ("dub","Dubai"),
    )
    fname = forms.CharField(label="First name")
    lname = forms.CharField(label="Last name")
    email = forms.EmailField(label="Email")
    gender= forms.MultipleChoiceField(required=True,widget=forms.RadioSelect(),choices=genders)
    subjects= forms.MultipleChoiceField(label="Choice subjects",required=True,widget=forms.CheckboxSelectMultiple(),choices=subjects_choice)
    text = forms.TimeField()
    city = forms.ChoiceField(choices=cities)