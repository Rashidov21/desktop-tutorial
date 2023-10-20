# Generated by Django 4.2.4 on 2023-10-20 04:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import django_quill.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Problem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='title')),
                ('slug', models.SlugField(max_length=256, unique=True, verbose_name='slug')),
                ('is_top', models.BooleanField(db_index=True, default=False, verbose_name='post is top')),
                ('is_published', models.BooleanField(db_index=True, default=False, verbose_name='post is published')),
                ('published_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='published date')),
                ('updated_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='updated date')),
                ('body', django_quill.fields.QuillField(verbose_name='body')),
                ('views', models.PositiveIntegerField(default=0, verbose_name='views')),
                ('solved', models.BooleanField(default=False, verbose_name='solved or no')),
                ('like', models.PositiveIntegerField(default=0, verbose_name='like')),
                ('dislike', models.PositiveIntegerField(default=0, verbose_name='dislike')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_problems', to=settings.AUTH_USER_MODEL, verbose_name='author')),
            ],
            options={
                'verbose_name': 'problem',
                'verbose_name_plural': 'problems',
                'db_table': 'problem',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='title')),
                ('slug', models.SlugField(max_length=256, unique=True, verbose_name='slug')),
                ('icon', models.CharField(max_length=64, verbose_name='icon')),
            ],
            options={
                'verbose_name': 'tag',
                'verbose_name_plural': 'tags',
                'db_table': 'tag',
            },
        ),
        migrations.CreateModel(
            name='Solve',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', django_quill.fields.QuillField(verbose_name='solve text')),
                ('full_name', models.CharField(blank=True, max_length=256, null=True, verbose_name='full name')),
                ('published_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='published date')),
                ('true_solution', models.BooleanField(default=False, verbose_name='True Solution')),
                ('up', models.PositiveIntegerField(default=0, verbose_name='Liked solution')),
                ('down', models.PositiveIntegerField(default=0, verbose_name='Disliked solution')),
                ('problem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='solutions', to='forum.problem', verbose_name='post')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_solutions', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
            options={
                'verbose_name': 'solve',
                'verbose_name_plural': 'solutions',
                'db_table': 'solve',
            },
        ),
        migrations.AddField(
            model_name='problem',
            name='tags',
            field=models.ManyToManyField(blank=True, db_index=True, related_name='problems', to='forum.tag', verbose_name='tags'),
        ),
    ]