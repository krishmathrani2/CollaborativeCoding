from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/collaboration/<str:session_id>/', consumers.CollaborationConsumer.as_asgi()),
]
