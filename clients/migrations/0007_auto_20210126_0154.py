# Generated by Django 3.1.5 on 2021-01-26 01:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0006_client_category'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ClientCategory',
            new_name='Category',
        ),
    ]