# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-15 18:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Seller',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Password', models.CharField(max_length=50)),
                ('Phone', models.CharField(max_length=10)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='Category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='yardsaleapp.ProductCategory'),
        ),
        migrations.AddField(
            model_name='product',
            name='Seller',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='yardsaleapp.Seller'),
        ),
    ]
