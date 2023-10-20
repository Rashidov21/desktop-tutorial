from django.db import models
from django.conf import settings
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django_quill.fields import QuillField
from django_resized import ResizedImageField

from django.template.defaultfilters import slugify
# Create your models here.

class Category(models.Model):
    title = models.CharField(_("title"), max_length=256)
    slug = models.SlugField(_("slug"), max_length=256, unique=True)
    icon = models.CharField(_("icon"), max_length=64)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        db_table = "category"
        verbose_name = _("category")
        verbose_name_plural = _("categories")


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


class Post(models.Model):
    title = models.CharField(_("title"), max_length=256)
    slug = models.SlugField(_("slug"), max_length=256, unique=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name=_(
        "author"), related_name="posts", db_index=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name=(
        "category"), related_name="posts", db_index=True ,null=True)
    tags = models.ManyToManyField(Tag, verbose_name=(
        "tags"), related_name="posts", db_index=True, blank=True)
    image = ResizedImageField(
        size=[1200, 800],
        crop=["middle", "center"],
        verbose_name=_("image"),
        quality=90,
        upload_to="posts/%Y/%m",
        blank=True,
    )
    icon = models.CharField(_("icon"), max_length=256,blank=True)
    is_top = models.BooleanField(
        _("post is top"), default=False, db_index=True)
    is_slider = models.BooleanField(
        _("post is slider"), default=False, db_index=True)
    is_published = models.BooleanField(
        _("post is published"), default=False, db_index=True)
    published_date = models.DateTimeField(
        _("published date"), default=timezone.now)
    body = QuillField(_("body"))
    views = models.PositiveIntegerField(_("views"), default=0)
    good = models.PositiveIntegerField(_("good"), default=0)
    like = models.PositiveIntegerField(_("like"), default=0)
    great = models.PositiveIntegerField(_("great"), default=0)
    excellent = models.PositiveIntegerField(_("excellent"), default=0)
    fire = models.PositiveIntegerField(_("fire"), default=0)
    legend = models.PositiveIntegerField(_("legend"), default=0)
    congrats = models.PositiveIntegerField(_("congrats"), default=0)
    neutral = models.PositiveIntegerField(_("neutral"), default=0)
    dislike = models.PositiveIntegerField(_("dislike"), default=0)
    
    reaction_count = models.PositiveIntegerField(default=0,blank=True)
    comments_count = models.PositiveIntegerField(default=0,blank=True)
    
    saved = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        verbose_name=_("saved"),
        related_name="saved_posts",
        blank=True,
    )

    class Meta:
        db_table = "post"
        verbose_name = _("post")
        verbose_name_plural = _("posts")
        ordering = ['-id']
    
    def save(self, *args, **kwargs): # new
      if not self.slug:
         self.slug = slugify(self.title)
      return super().save(*args, **kwargs)
    
    def get_most_reaction(self):
        reactions =  {
            'good':self.good,"like":self.like,'great':self.great,
            "fire":self.fire,'legend':self.legend,'neutral': self.neutral,
            "dislike":self.dislike}
            
        most_reacted = sorted(reactions.items(),key=lambda item:item[1], reverse=True)[0]
        reaction = {"emoji":most_reacted[0], "value":most_reacted[1]}
        return reaction
    
    
    def get_all_reaction_count(self):
        reacts = 0
        reactions =  {
            'good':self.good,"like":self.like,'great':self.great,
            "fire":self.fire,'legend':self.legend,'neutral': self.neutral,
            "dislike":self.dislike}
        for r in reactions.values():
            reacts += r
        return reacts
    
    def get_comments_count(self):
        return self.comments.all().count()
    
    @property
    def image_url(self):
        return f"{settings.HOST}{self.image.url}" if self.image else "#"

    @property
    def content(self):
        return f"{self.body.html}"

    @property
    def plain(self):
        return f"{self.body.plain[:150]}"


    
    def __str__(self):
        return f"{self.title}"


class Comment(models.Model):
    text = models.TextField(_("text"))
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                             verbose_name=_("user"), related_name="comments", null=True)
    full_name = models.CharField(_("full name"), max_length=256, blank=True, null=True)
    post = models.ForeignKey(Post, verbose_name=_(
        "post"), on_delete=models.CASCADE,  related_name="comments")
    published_date = models.DateTimeField(
        _("published date"), default=timezone.now)

    class Meta:
        db_table = "comment"
        verbose_name = _("comment")
        verbose_name_plural = _("comments")

    
    def __str__(self):
        return f"{self.text}"
