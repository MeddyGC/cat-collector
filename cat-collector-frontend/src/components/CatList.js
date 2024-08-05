import React, { useState, useEffect } from 'react';
import { getCats, addCatToFavorites } from '../services/catService';
import Modal from './Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CatList.css'; 
import '../App.css';

const CatList = () => {
    const [cats, setCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState(null);

    useEffect(() => {
        getCats().then(response => setCats(response.data));
    }, []);

    const handleAddToFavorites = (cat) => {
        addCatToFavorites(cat).then(() => {
            alert(`Navigate to Fav tab to edit!`);
        });
    };

    const handleImageClick = (cat) => {
        setSelectedCat(cat);
    };

    const handleCloseModal = () => {
        setSelectedCat(null);
    };

    return (
        <div className='container-fluid App'>
            <h1 className='header-text'>Cats</h1>
            <div className='card-container'>
                {cats.map(cat => (
                    <div className='card' key={cat.api_id}>
                        <div className='image-container'>
                            <img
                                src={cat.image_url}
                                alt={cat.name}
                                className='card-img-top'
                                onClick={() => handleImageClick(cat)}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className='overlay'>
                                <button 
                                    className='btn-heart'
                                    onClick={() => handleAddToFavorites(cat)}
                                >
                                    <span>Add to Favourites </span>
                                    <svg
                                        width='1.5em'
                                        height='1.5em'
                                        viewBox='0 0 16 16'
                                        className='bi bi-heart-fill'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            {selectedCat && (
                <Modal
                    cat={selectedCat}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default CatList;
