from django.urls import path, include, re_path
from products import views

urlpatterns = [
    re_path('product/(?P<product_id>\d+)/', views.product, name='product')

]
