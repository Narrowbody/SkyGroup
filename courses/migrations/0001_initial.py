# Generated by Django 3.1.6 on 2021-03-05 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(default='', max_length=20)),
                ('title', models.CharField(default='', max_length=200)),
                ('subject', models.CharField(default='', max_length=200)),
                ('description', models.TextField(default='', max_length=2000)),
            ],
        ),
    ]
