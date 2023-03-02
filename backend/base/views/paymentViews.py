from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from decimal import Decimal
from ..products import products
from ..models import Product, Order, OrderItem, ShippingAddress
from ..serializer import OrderSerializer
from rest_framework import status
from datetime import datetime
import os
import stripe
from django.http import JsonResponse

@api_view(['POST'])
def create_payment(request):
    amount = 1000
    payment_intent = stripe.PaymentIntent.create(
        amount=amount,
        currency='usd',
        payment_method_types=['card'],
        receipt_email='test@example.com'
    )
    client_secret = payment_intent.client_secret
    return Response(status=status.HTTP_200_OK, data={'client_secret': client_secret})
    

