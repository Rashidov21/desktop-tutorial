# Generated by Django 4.2.5 on 2023-09-25 08:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_order_end_date_alter_order_end_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='output',
            name='workers_debt',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='worker_debt', to='main.worker'),
        ),
    ]