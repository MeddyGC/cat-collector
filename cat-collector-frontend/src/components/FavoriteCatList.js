import React, { useState, useEffect } from 'react';
import { getFavoriteCats, deleteFavoriteCat } from '../services/catService';
import CatEditForm from './CatEditForm'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './CatList.css'; 
import '../App.css';

const FavoriteCatList = () => {
    const [favoriteCats, setFavoriteCats] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false); 
    const [selectedCat, setSelectedCat] = useState(null); 

    useEffect(() => {
        getFavoriteCats().then(response => setFavoriteCats(response.data));
    }, []);

    const handleDeleteFavorite = (id) => {
        deleteFavoriteCat(id).then(() => {
            setFavoriteCats(favoriteCats.filter(cat => cat.id !== id));
        });
    };

    const handleEditCat = (cat) => {
        setSelectedCat(cat);
        setShowEditForm(true);
    };

    const handleFormClose = () => {
        setShowEditForm(false);
        setSelectedCat(null);
    };

    const handleFormSave = () => {
        getFavoriteCats().then(response => setFavoriteCats(response.data));
        handleFormClose();
    };

    return (
        <div className='container-fluid App'>
            <h1 className='header-text'>Favs</h1>
            <div className='card-container'>
                {favoriteCats.map(fav => (
                    <div className='card' key={fav.id}>
                        <div className='image-container'>
                            <img 
                                src={fav.cat.image_url} 
                                alt={fav.cat.name} 
                                className='img-fluid clickable-image'
                                onClick={() => handleEditCat(fav.cat)}
                            />
                            <div className='overlay'>
                                <button 
                                    className='btn-heart mt-2' 
                                    onClick={() => handleDeleteFavorite(fav.id)}
                                >
                                    <span className='mr-2'>Remove </span>
                                    <svg
                                        width='1.5em'
                                        height='1.5em'
                                        viewBox='0 0 16 16'
                                        className='bi bi-x-square'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
                                        />
                                        <path
                                            fillRule='evenodd'
                                            d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
                                        />
                                    </svg>
                                </button>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showEditForm && (
                <CatEditForm
                    cat={selectedCat}
                    onClose={handleFormClose}
                    onSave={handleFormSave}
                />
            )}
        </div>
    );
};

export default FavoriteCatList;
