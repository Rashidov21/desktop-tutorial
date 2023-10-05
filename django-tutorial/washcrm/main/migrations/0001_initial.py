# Generated by Django 4.2.4 on 2023-09-21 04:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Output',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50)),
                ('comment', models.TextField(blank=True)),
                ('amount', models.PositiveSmallIntegerField(blank=True, default=0)),
            ],
            options={
                'verbose_name': 'Output',
                'verbose_name_plural': 'Outputs',
            },
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='name')),
                ('slug', models.SlugField(verbose_name='slug')),
                ('price', models.PositiveIntegerField(blank=True, default=0)),
                ('active', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Service',
                'verbose_name_plural': 'Services',
            },
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='name')),
                ('phone', models.CharField(blank=True, max_length=15)),
                ('address', models.CharField(blank=True, max_length=100)),
                ('balance', models.IntegerField(default=0)),
                ('balance_status', models.CharField(blank=True, max_length=20)),
                ('work_count', models.PositiveIntegerField(blank=True, default=0)),
            ],
            options={
                'verbose_name': 'Worker',
                'verbose_name_plural': 'Workers',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=150, verbose_name='name')),
                ('price', models.PositiveSmallIntegerField(blank=True, default=0)),
                ('status', models.CharField(blank=True, choices=[('inproccess', 'In proccess'), ('waiting', 'Waiting'), ('doned', 'Doned')], max_length=50)),
                ('car', models.CharField(blank=True, max_length=150)),
                ('sart_time', models.DateTimeField(auto_now_add=True)),
                ('end_time', models.DateTimeField(blank=True)),
                ('customer_name', models.CharField(blank=True, max_length=150)),
                ('customer_phone', models.CharField(blank=True, max_length=20)),
                ('discount', models.PositiveSmallIntegerField(default=0)),
                ('payed', models.BooleanField(default=False)),
                ('active', models.BooleanField(default=False)),
                ('service_type', models.ManyToManyField(null=True, related_name='services', to='main.service')),
                ('worker', models.ManyToManyField(null=True, related_name='workers', to='main.worker')),
            ],
            options={
                'verbose_name': 'Order',
                'verbose_name_plural': 'Orders',
            },
        ),
        migrations.CreateModel(
            name='Balance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('balance', models.PositiveIntegerField(default=0)),
                ('orders', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='orders', to='main.order')),
            ],
            options={
                'verbose_name': 'Balance',
                'verbose_name_plural': 'Balances',
            },
        ),
    ]