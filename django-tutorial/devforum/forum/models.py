from django.db import models
from django.conf import settings
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django_quill.fields import QuillField


from django.template.defaultfilters import slugify
# Create your models here.



class Tag(models.Model):
    title = models.CharField(_("title"), max_length=256)
    slug = models.SlugField(_("slug"), max_length=256, unique=True)
    icon = models.CharField(_("icon"), max_length=64)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        db_table = "tag"
        verbose_name = _("tag")
        verbose_name_plural = _("tags")


class Problem(models.Model):
    title = models.CharField(_("title"), max_length=256)
    slug = models.SlugField(_("slug"), max_length=256, unique=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name=_(
        "author"), related_name="user_problems", db_index=True)
    tags = models.ManyToManyField(Tag, verbose_name=(
        "tags"), related_name="problems", db_index=True, blank=True)
    is_top = models.BooleanField(
        _("post is top"), default=False, db_index=True)
    is_published = models.BooleanField(
        _("post is published"), default=False, db_index=True)
    published_date = models.DateTimeField(
        _("published date"), default=timezone.now)
    updated_date = models.DateTimeField(
        _("updated date"), default=timezone.now)
    body = QuillField(_("body"))
    views = models.PositiveIntegerField(_("views"), default=0)
    solved = models.BooleanField("solved or no", default=False)
    like = models.PositiveIntegerField(_("like"), default=0)
    dislike = models.PositiveIntegerField(_("dislike"), default=0)
   

    
    class Meta:
        db_table = "problem"
        verbose_name = _("problem")
        verbose_name_plural = _("problems")
        ordering = ['-id']
    
    def save(self, *args, **kwargs): # new
      if not self.slug:
         self.slug = slugify(self.title)
      return super().save(*args, **kwargs)
    
    
    def get_comments_count(self):
        return self.comments.all().count()
    

    @property
    def content(self):
        return f"{self.body.html}"

    @property
    def plain(self):
        return f"{self.body.plain[:150]}"


    
    def __str__(self):
        return f"{self.title}"


class Solve(models.Model):
    text = QuillField(_("solve text"))
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                             verbose_name=_("user"), related_name="user_solutions", null=True)
    full_name = models.CharField(_("full name"), max_length=256, blank=True, null=True)
    problem = models.ForeignKey(Problem, verbose_name=_(
        "post"), on_delete=models.CASCADE,  related_name="solutions")
    published_date = models.DateTimeField(
        _("published date"), default=timezone.now)
    true_solution = models.BooleanField("True Solution", default=False)
    
    up = models.PositiveIntegerField(_("Liked solution"), default=0)
    down = models.PositiveIntegerField(_("Disliked solution"), default=0)
    
    class Meta:
        db_table = "solve"
        verbose_name = _("solve")
        verbose_name_plural = _("solutions")

    
    def __str__(self):
        return f"{self.text}"
