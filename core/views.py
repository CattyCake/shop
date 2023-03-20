from django.shortcuts import render
from products.models import *


def index(request):
    products_image = ProductImage.objects.filter(is_active=True, is_main=True, product__is_active=True)
    return render(request, 'base.html', locals())