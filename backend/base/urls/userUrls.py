from django.urls import path
from base.views import userViews as views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUser, name='user-profile'),
    path('', views.getUsers, name='users'),
]

