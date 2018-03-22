from rest_framework import serializers
from api.models import ApiRest, LANGUAGE_CHOICES, STYLE_CHOICES


class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiRest
        fields = ('id', 'title', 'code', 'linenos', 'language', 'style')
