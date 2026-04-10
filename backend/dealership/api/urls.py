from django.urls import path
from . import views

urlpatterns = [
    path('dealers/', views.get_dealers, name='get_dealers'),
    path('dealer/<int:id>/', views.get_dealer_by_id, name='get_dealer_by_id'),
    path('dealer/<int:id>/reviews/', views.get_dealer_reviews, name='get_dealer_reviews'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('carmakes/', views.get_car_makes, name='get_car_makes'),
    path('analyze/', views.analyze_sentiment, name='analyze_sentiment'),
]
