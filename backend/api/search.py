import requests




def search_cats(breed_id, api_key, page=1, limit=10):
    url = f'https://api.thecatapi.com/v1/images/search?limit={limit}&page={page}&breed_ids={breed_id}&api_key={api_key}'
    response = requests.get(url)
    response.raise_for_status()  # Raise an HTTPError for bad responses
    return response.json()
