# Generated by Django 3.1.5 on 2021-02-02 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Operations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(verbose_name='Sort Order')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
            ],
            options={
                'ordering': ['sort_order'],
            },
        ),
        migrations.CreateModel(
            name='AreasOfOperations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('areas', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='operations.operations', verbose_name='Areas of Operations')),
            ],
        ),
    ]