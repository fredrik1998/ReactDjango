from django.urls import path
from base.views import productViews as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.getProducts, name='products'),
    path('top/', views.getTopProducts, name='top-products'),
    path('create/', views.createProduct, name='product-create'),
     path('upload/', views.uploadImage, name='image-upload'),
    path('<str:pk>/', views.getProduct, name='product'),
    path('delete/<str:pk>/', views.deleteProduct, name='product-delete'),
    path('update/<str:pk>/', views.updateProduct, name='product-update'),
]

