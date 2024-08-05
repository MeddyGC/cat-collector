import requests
from rest_framework import viewsets
from .models import Cat, FavoriteCat
from .serializers import CatSerializer, FavoriteCatSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from .search import search_cats

class CatViewSet(viewsets.ModelViewSet):
    queryset = Cat.objects.all()
    serializer_class = CatSerializer

class FavoriteCatViewSet(viewsets.ModelViewSet):
    queryset = FavoriteCat.objects.all()
    serializer_class = FavoriteCatSerializer

    def create(self, request, *args, **kwargs):
        cat_id = request.data.get('cat')
        cat = Cat.objects.get(id=cat_id)
        favorite_cat, created = FavoriteCat.objects.get_or_create(cat=cat)
        serializer = self.get_serializer(favorite_cat)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        favorite_cat = self.get_object()
        favorite_cat.delete()
        return Response(status=204)
    
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

def search_view(request):
    breed_id = request.GET.get('breed_id', '')
    page = int(request.GET.get('page', 1))  
    api_key = 'live_yK2fmtrb6mnkfLhhzT52NAs3ihxAkmYZGN663ucXOcEzO1T71WQWpxMly9nQIGmC'  
    try:
        data = search_cats(breed_id, api_key, page=page)
        return JsonResponse(data, safe=False)
    except requests.HTTPError as e:
        return JsonResponse({'error': str(e)}, status=500)