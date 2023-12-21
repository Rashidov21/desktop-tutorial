# Generated by Django 4.2.8 on 2023-12-14 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('image', models.ImageField(upload_to='banner_images/')),
            ],
        ),
        migrations.AlterField(
            model_name='device',
            name='device_type',
            field=models.CharField(choices=[('chexol', 'Chexol'), ('naushnik', 'Naushnik'), ('zaryadnik', 'Zaryadka'), ('qurilma', 'Qurilma'), ('boshqa', 'Boshqalar')], max_length=100),
        ),
    ]
