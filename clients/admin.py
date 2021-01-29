from django.contrib import admin
from .models import Client, Category


class ClientAdmin(admin.ModelAdmin):
    list_display = ('title', 'category')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('sortOrder', 'category')
    #list_filter = ['sortOrder']


admin.site.register(Client, ClientAdmin)
admin.site.register(Category, CategoryAdmin)
