from api.models import ApiRest
from api.serializers import SnippetSerializer
from rest_framework import generics


class SnippetList(generics.ListCreateAPIView):
    queryset = ApiRest.objects.all()
    serializer_class = SnippetSerializer


class SnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ApiRest.objects.all()
    serializer_class = SnippetSerializer
