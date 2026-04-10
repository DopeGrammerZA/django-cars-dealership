from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from textblob import TextBlob

@api_view(['GET'])
def get_dealers(request):
    return Response([{"id": 1, "name": "Chicago Auto", "state": "IL", "city": "Chicago"}])

@api_view(['GET'])
def get_dealer_by_id(request, id):
    return Response({"id": id, "name": f"Dealer {id}", "state": "KS", "city": "Kansas City"})

@api_view(['GET'])
def get_dealer_reviews(request, id):
    return Response([{"id": 1, "dealer_id": id, "review": "Great service!", "rating": 5}])

@api_view(['POST'])
def login_user(request):
    user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
    if user:
        login(request, user)
        return Response({"message": "Login successful", "token": "fake-token-123"})
    return Response({"error": "Invalid credentials"}, status=400)

@api_view(['POST'])
def logout_user(request):
    logout(request)
    return Response({"message": "Logout successful"})

@api_view(['POST'])
def register_user(request):
    User.objects.create_user(
        username=request.data['username'],
        password=request.data['password'],
        email=request.data['email'],
        first_name=request.data['first_name'],
        last_name=request.data['last_name']
    )
    return Response({"message": "User created successfully"})

@api_view(['GET'])
def get_car_makes(request):
    return Response([
        {"id": 1, "make": "Toyota", "models": ["Camry", "Corolla"]},
        {"id": 2, "make": "Honda", "models": ["Civic", "Accord"]}
    ])

@api_view(['POST'])
def analyze_sentiment(request):
    review = request.data.get('review', '')
    blob = TextBlob(review)
    sentiment = 'positive' if blob.sentiment.polarity > 0 else 'negative' if blob.sentiment.polarity < 0 else 'neutral'
    return Response({"review": review, "sentiment": sentiment, "score": blob.sentiment.polarity})
