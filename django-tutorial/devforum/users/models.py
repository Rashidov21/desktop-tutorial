
from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.core.signing import TimestampSigner
from django_resized import ResizedImageField
from django.contrib.auth.models import AbstractUser
# Create your models here.




class RegionChoices(models.TextChoices):
    andijon = "andijon", _("Andijon viloyati")
    buxoro = "buxoro", _("Buxoro viloyati")
    jizzax = "jizzax", _("Jizzax viloyati")
    qashqadaryo = "qashqadaryo", _("Qashqadaryo viloyati")
    navoiy = "navoiy", _("Navoiy viloyati")
    namangan = "namangan", _("Namangan viloyati")
    samarqand = "samarqand", _("Samarqand viloyati")
    suxondaryo = "suxondaryo", _("Suxondaryo viloyati")
    sirdaryo = "sirdaryo", _("Sirdaryo viloyati")
    toshkent = "toshkent", _("Toshkent viloyati")
    fargona = "fargona", _("Farg'ona viloyati")
    xorazm = "xorazm", _("Xorazm viloyati")
    qoraqalpoq = "qoraqalpoq", _("Qoraqalpog`iston Respublikasi")



class SpecChoices(models.TextChoices):
    fullstack = "FullStack dasturchi", _("FullStack dasturchi")
    frontend = "Front-End dasturchi", _("Front-End dasturchi")
    backend = "Back-End dasturchi", _("Back-End dasturchi")
    mobile = "Mobile dasturchi", _("Mobile dasturchi")
    uxui = "UX/UI dizayner", _("UX/UI dizayner")
    graphic = "Grafik dizayner", _("Grafik dizayner")
    qa = "QA muhandis", _("QA muhandis")
    gamedev = "O'yin dasturchisi", _("O'yin dasturchisi")
    tester = "Tester", _("Tester")
    hr = "HR menejer", _("HR menejer")
    pm = "Proyekt menejer", _("Proyekt menejer")
    lead = "Team Lead", _("Team Lead")
    seo = "SEO mutaxasis", _("SEO mutaxasis")
    other = "Boshqa soha", _("Boshqa soha")


class User(AbstractUser):

    first_name = models.CharField(_("first name"), max_length=256 ,blank=True)
    last_name = models.CharField(_("last name"), max_length=256,blank=True)
    email = models.EmailField(
        _("email"),
        unique=True,
        error_messages={
            "error": _("Bunday email mavjud."),
        },
        null=True,
        blank=True
    )
    username = models.CharField(
        _("username"),
        max_length=256,
        unique=True,
        help_text=_(
            "Majburiy. 30 yoki undan kam belgi. Faqat harflar, raqamlar va @/./+/-/_.",
        ),
        db_index=True,
        null=True,
    )
    bio = models.TextField(_("bio"), blank=True)
    avatar = ResizedImageField(
        size=[500, 500],
        crop=["middle", "center"],
        verbose_name=_("avatar"),
        quality=90,
        upload_to="user/%Y/%m",
        null=True,
        blank=True
    )
    region = models.CharField(
        _("region"),
        max_length=256,
        choices=RegionChoices.choices,
        blank=True
    )
    spec = models.CharField(
        _("specialization"),
        max_length=256,
        choices=SpecChoices.choices,
        blank=True
    )

    true_solutions = models.PositiveIntegerField(_("true solutions"), default=0)
    question_count = models.PositiveIntegerField(_("question"), default=0)
    answers_count = models.PositiveIntegerField(_("answers"), default=0)
    
    facebook = models.CharField(_("facebook"), max_length=256, blank=True)
    instagram = models.CharField(_("instagram"), max_length=256, blank=True)
    telegram = models.CharField(_("telegram"), max_length=256, blank=True)
    linkedin = models.CharField(_("linkedin"), max_length=256, blank=True)
    github = models.CharField(_("github"), max_length=256, blank=True)


    followers = models.ManyToManyField('self', symmetrical=False, blank=True)

    def count_followers(self):
        return self.followers.count()
    
    def count_following(self):
        return User.objects.filter(followers=self).count()

    created_at = models.DateTimeField(
        _("date created"),
        auto_now_add=True,
        null=True,
    )
    updated_at = models.DateTimeField(_("date updated"), auto_now=True)



    signer = TimestampSigner(sep=":")

    @property
    def avatar_url(self):
        return f"{settings.HOST}{self.avatar.url}" if self.avatar else ""
    
    def get_full_name(self):
        if self.first_name and self.last_name:
            return str(self.first_name + " " + self.last_name)
        else:
            return "To'ldirilmagan"
        
        
    def get_author_name(self):
        if self.first_name and self.last_name:
            return str(self.first_name + " " + self.last_name)
        else:
            return self.username
    
    
    def check_any_social_link(self):
        return any([
            self.facebook,
            self.instagram,
            self.telegram,
            self.linkedin,
            self.github,])
    

    
    def __str__(self):
        return f"{self.email}"

    class Meta:
        db_table = "user"
        swappable = "AUTH_USER_MODEL"
        verbose_name = _("user")
        verbose_name_plural = _("users")