from django.urls import path
from base.views import paymentViews as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('create-payment/', views.create_payment),
]