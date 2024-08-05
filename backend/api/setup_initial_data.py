
from django.core.management import call_command

def setup_initial_data():
    call_command('fetch_cats')
