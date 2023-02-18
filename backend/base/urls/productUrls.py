from django.urls import path
from base.views import productViews as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.getProducts, name='products'),
     path('top/', views.getTopProducts, name='top-products'),
    path('<str:pk>/', views.getProduct, name='product'),
   

]

