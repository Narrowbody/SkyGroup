from django.db import models


class Category(models.Model):
    sortOrder = models.IntegerField(verbose_name='Sort Order')
    category = models.CharField(max_length=255, verbose_name='Category')


    def __str__(self):
        return self.category

    class Meta:
        ordering = ["sortOrder"]
        verbose_name_plural = "Categories"


class Client(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, default=1, verbose_name="Client Category", on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    logo = models.CharField(max_length=2083, default='No Logo')


