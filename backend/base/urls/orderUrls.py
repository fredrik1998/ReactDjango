from django.urls import path
from base.views import orderViews as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('add/', views.addOrderItems, name='orders-add'),
    path('<str:pk>/', views.getOrderByID, name='user-order')
]

