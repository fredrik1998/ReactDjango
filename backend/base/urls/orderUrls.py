from django.urls import path
from base.views import orderViews as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('add/', views.addOrderItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name='myorders'),
    path('<str:pk>/', views.getOrderByID, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='pay'),
]

