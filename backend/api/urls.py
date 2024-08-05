from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CatViewSet, FavoriteCatViewSet, search_view

router = DefaultRouter()
router.register(r'cats', CatViewSet)
router.register(r'favorite-cats', FavoriteCatViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('search/', search_view, name='search_cats')
]
