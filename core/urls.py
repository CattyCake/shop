from django.urls import path, include, re_path
from core import views

urlpatterns = [
    path('', views.index, name = 'index')

]
