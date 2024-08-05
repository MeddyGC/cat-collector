# Getting Started with Cat Collector Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective
A web-based Cat Collector application that interacts with TheCatAPI to retrieve information about 100 random cats, including their images, and allows users to perform CRUD operations on this data within a local application. This application demonstrates proficiency in JavaScript, Python, and PostgreSQL.

## Features
* Display cat images and information in a user-friendly interface.
* Add, remove, and update cats in the favorites list.
* Pagination or infinite scroll to manage large datasets.
* Search for cats by breed.
* Fetch 100 random cats from TheCatAPI and store in a PostgreSQL database.

## Technologies Used
* Front-end: React, CSS
* Back-end: Django, Python
* Database: PostgreSQL
* API: TheCatAPI

## Available Scripts

In the project directory, you can run:

### Front-end

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Back-end

#### `python manage.py runserver`
Start the Django development server.

#### `python manage.py migrate`
Run the database migrations.

#### `python manage.py fetch_cats`
Fetch initial data from TheCatAPI and store it in the PostgreSQL database.

## Installation Instructions

### Front-end
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <repository-directory>
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

### Back-end
1. Set up a Python virtual environment:
    ```bash
    python -m venv venv
    ```
2. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run migrations:
    ```bash
    python manage.py migrate automatically fetch 100 random from TheCatAPI cats using set up initially <setup_initial_data.py>
    ```
5. You can manually fetch initial data from TheCatAPI:
    ```bash
    python manage.py fetch_cats
    ```
5. Start the Django server:
    ```bash
    python manage.py runserver
    ```

## Usage Instructions

### Front-end
* **View Cat Images:** Navigate to the main page to see a list of cat images.
* **Add to Favorites:** Click on the "Add to Favorites" button on each cat image.
* **Remove from Favorites:** Click on the "Remove from Favorites" button in the favorites list.
* **Update Cat Info:** Click on a cat image to edit its details.

## API Endpoints

* **GET /cats:** Retrieve all cat data.
* **POST /cats:** Add a new cat to favorites.
* **GET /cats/:id:** Retrieve a specific cat's details.
* **PUT /cats/:id:** Update a specific cat's details.
* **DELETE /cats/:id:** Remove a cat from favorites.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Getting Started with Cat Collector Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective
Develop a web-based Cat Collector application that interacts with TheCatAPI to retrieve information about 100 random cats, including their images, and allows users to perform CRUD operations on this data within a local application. This application demonstrates proficiency in JavaScript, Python, and PostgreSQL.

## Features
* Display cat images and information in a user-friendly interface.
* Add, remove, and update cats in the favorites list.
* Pagination or infinite scroll to manage large datasets.
* Search for cats by breed.
* Fetch 100 random cats from TheCatAPI and store in a PostgreSQL database.

## Technologies Used
* Front-end: React, CSS
* Back-end: Django, Python
* Database: PostgreSQL
* API: TheCatAPI

## Available Scripts

In the project directory, you can run:

### Front-end

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Back-end

#### `python manage.py runserver`
Start the Django development server.

#### `python manage.py migrate`
Run the database migrations.

#### `python manage.py fetch_cats`
Fetch initial data from TheCatAPI and store it in the PostgreSQL database.

## Installation Instructions

### Front-end
1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <repository-directory>
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

### Back-end
1. Set up a Python virtual environment:
    ```bash
    python -m venv venv
    ```
2. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run migrations:
    ```bash
    python manage.py migrate
    ```
5. Fetch initial data from TheCatAPI:
    ```bash
    python manage.py fetch_cats
    ```
6. Start the Django server:
    ```bash
    python manage.py runserver
    ```

## Usage Instructions

### Front-end
* **View Cat Images:** Navigate to the main page to see a list of cat images.
* **Add to Favorites:** Click on the "Add to Favorites" button on each cat image.
* **Remove from Favorites:** Click on the "Remove from Favorites" button in the favorites list.
* **Update Cat Info:** Click on a cat image to edit its details.

## API Endpoints

* **GET /cats:** Retrieve all cat data.
* **POST /cats:** Add a new cat to favorites.
* **GET /cats/:id:** Retrieve a specific cat's details.
* **PUT /cats/:id:** Update a specific cat's details.
* **DELETE /cats/:id:** Remove a cat from favorites.

##API Calls
* ** Favorite Cats: http://local:8000/api/favorite-cats/
* [
    {
        "id": 2,
        "cat": {
            "id": 86,
            "api_id": "7Q76qhEAF",
            "image_url": "https://cdn2.thecatapi.com/images/7Q76qhEAF.jpg",
            "name": "Unnamed",
            "description": "No description",
            "breed": "Exotic Shorthair",
            "is_favorite": false
        }
    }

*
* Breeds: http://local:8000/api/search/?breed_id=beng#
* [
{
"breeds": [
{
"weight": {
"imperial": "6 - 12",
"metric": "3 - 7"
},
"id": "beng",
"name": "Bengal",
"cfa_url": "http://cfa.org/Breeds/BreedsAB/Bengal.aspx",
"vetstreet_url": "http://www.vetstreet.com/cats/bengal",
"vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/bengal",
"temperament": "Alert, Agile, Energetic, Demanding, Intelligent",
"origin": "United States",
"country_codes": "US",
"country_code": "US",
"description": "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
"life_span": "12 - 15",
"indoor": 0,
"lap": 0,
"adaptability": 5,
"affection_level": 5,
"child_friendly": 4,
"cat_friendly": 4,
"dog_friendly": 5,
"energy_level": 5,
"grooming": 1,
"health_issues": 3,
"intelligence": 5,
"shedding_level": 3,
"social_needs": 5,
"stranger_friendly": 3,
"vocalisation": 5,
"bidability": 3,
"experimental": 0,
"hairless": 0,
"natural": 0,
"rare": 0,
"rex": 0,
"suppressed_tail": 0,
"short_legs": 0,
"wikipedia_url": "https://en.wikipedia.org/wiki/Bengal_(cat)",
"hypoallergenic": 1,
"reference_image_id": "O3btzLlsO"
}
],
"id": "LSaDk6OjY",
"url": "https://cdn2.thecatapi.com/images/LSaDk6OjY.jpg",
"width": 1080,
"height": 1080
},

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)v
