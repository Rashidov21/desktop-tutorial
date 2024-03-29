# Generated by Django 4.2.4 on 2023-10-04 09:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields
import django_resized.forms


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
                ('slug', models.SlugField(max_length=100, unique=True, verbose_name='*')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Category')),
                ('slug', models.SlugField(unique=True, verbose_name='*')),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Genre')),
                ('slug', models.SlugField(max_length=100, unique=True, verbose_name='*')),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Name')),
                ('slug', models.SlugField(max_length=100, unique=True, verbose_name='*')),
                ('poster', django_resized.forms.ResizedImageField(crop=None, force_format=None, keep_meta=True, quality=-1, scale=None, size=[360, 530], upload_to='movie_posters/')),
                ('year', models.PositiveSmallIntegerField(default=2023)),
                ('country', django_countries.fields.CountryField(max_length=746, multiple=True)),
                ('quality', models.CharField(choices=[('webrip', 'WEBRip'), ('bdrip', 'BDRip'), ('ts', 'TS'), ('hdrip', 'HDRip')], max_length=50, verbose_name='Quality')),
                ('dubbed', models.BooleanField(default=True)),
                ('duration', models.DurationField(blank=True)),
                ('rating', models.PositiveSmallIntegerField(default=0)),
                ('description', models.TextField(blank=True)),
                ('file_url', models.URLField(blank=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='movies.category')),
                ('genre', models.ManyToManyField(to='movies.genre')),
            ],
        ),
        migrations.CreateModel(
            name='Roles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actor', models.BooleanField(default=False)),
                ('director', models.BooleanField(default=False)),
                ('producer', models.BooleanField(default=False)),
                ('screenwriter', models.BooleanField(default=False)),
                ('composer', models.BooleanField(default=False)),
                ('painter', models.BooleanField(default=False)),
                ('author', models.ManyToManyField(to='movies.author')),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.movie')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_time', models.DateTimeField(auto_now_add=True)),
                ('comment', models.CharField(max_length=200)),
                ('movie', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='movie_comments', to='movies.movie')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
