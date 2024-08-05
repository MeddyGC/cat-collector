import React, { useState } from 'react';
import { getBreed } from '../../services/catService'; 
import './SearchPage.css';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cats, setCats] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            let trimmedsearchTerm = searchTerm.slice(0, 4);
            const response = await getBreed(trimmedsearchTerm);
            setCats(response.data);
            setCurrentIndex(0); 
        } catch (err) {
            setError('Error fetching cats');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cats.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cats.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="search-page">
            <h1 className="search-title">Search</h1>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <div className="search-input-container">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </div>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            
                <div className="image-container">
                    {cats.length > 0 && (
                        <>
                            <img src={cats[currentIndex].url} alt={cats[currentIndex].breeds[0].name} className="card-img-top" />
                            <div className="pagination-controls">
                                <button className="pagination-button" onClick={handlePrevClick}>Previous</button>
                                <span className="pagination-info">{currentIndex + 1} / {cats.length}</span>
                                <button className="pagination-button" onClick={handleNextClick}>Next</button>
                            </div>
                        </>
                    )}
                </div>
                {cats.length > 0 && (
                    <div className="cat-details">
                        <h2 className="cat-name">{cats[currentIndex].breeds[0].name}</h2>
                        <p className="cat-origin">Origin: {cats[currentIndex].breeds[0].origin}</p>
                        <p className="cat-description">{cats[currentIndex].breeds[0].description}</p>
                    </div>
                )}
            
        </div>
    );
};

export default SearchPage;
