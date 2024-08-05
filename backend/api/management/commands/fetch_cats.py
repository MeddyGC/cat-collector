import requests
from django.core.management.base import BaseCommand
from api.models import Cat

class Command(BaseCommand):
    help = 'Fetch and store 100 random cats from TheCatAPI if the database is empty'

    def handle(self, *args, **kwargs):
        if Cat.objects.exists():
            self.stdout.write(self.style.WARNING('Database already contains cat data. No new data fetched.'))
            return

        url = 'https://api.thecatapi.com/v1/images/search'
        headers = {'x-api-key': 'live_yK2fmtrb6mnkfLhhzT52NAs3ihxAkmYZGN663ucXOcEzO1T71WQWpxMly9nQIGmC'}
        params = {'limit': 100}

        response = requests.get(url, headers=headers, params=params)
        cats = response.json()

        self.stdout.write(self.style.SUCCESS(f'Response received with {len(cats)} cats.'))

        for cat_data in cats:
            breeds = cat_data.get('breeds', [])
            breed_names = ', '.join([breed['name'] for breed in breeds]) if breeds else 'Unknown breed'
            
            cat, created = Cat.objects.get_or_create(
                api_id=cat_data['id'],
                defaults={
                    'image_url': cat_data['url'],
                    'name': 'Unnamed',  
                    'description': 'No description',  
                    'breed': breed_names,
                    'is_favorite': False  
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Successfully added cat: {cat.api_id}'))
            else:
                self.stdout.write(f'Cat already exists: {cat.api_id}')
