from django.db import models

class Cat(models.Model):
    api_id = models.CharField(max_length=50, unique=True)
    image_url = models.URLField()
    name = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    breed = models.CharField(max_length=100, blank=True, null=True)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.name or self.api_id
    
    class Meta:
        db_table = 'cat' 

class FavoriteCat(models.Model):
    cat = models.OneToOneField(Cat, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'favorite_cat' 

    
