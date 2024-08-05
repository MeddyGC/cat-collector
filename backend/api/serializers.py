from rest_framework import serializers
from .models import Cat, FavoriteCat

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cat
        fields = '__all__'
class FavoriteCatSerializer(serializers.ModelSerializer):
    cat = CatSerializer()

    class Meta:
        model = FavoriteCat
        fields = ['id', 'cat']
