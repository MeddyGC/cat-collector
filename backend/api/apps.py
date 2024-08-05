from django.apps import AppConfig
from api.setup_initial_data import setup_initial_data


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        
        setup_initial_data()
        

