import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getCats = () => axios.get(`${API_URL}cats/`);
export const getBreed = (breedId, page = 1) => {
    return axios.get(`${API_URL}search/`, {
        params: {
            breed_id: breedId,
            page: page
        }
    });
};


export const addCatToFavorites = (cat) => axios.post(`${API_URL}favorite-cats/`, { cat: cat.id });
export const getFavoriteCats = () => axios.get(`${API_URL}favorite-cats/`);
export const deleteFavoriteCat = (id) => axios.delete(`${API_URL}favorite-cats/${id}/`);
export const updateCatDetails = (id, catData) => {
    return axios.put(`${API_URL}cats/${id}/`, catData);
};

