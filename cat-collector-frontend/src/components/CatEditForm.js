import React, { useState, useEffect } from 'react';
import { updateCatDetails } from '../services/catService'; 
import '../components/Modal/Modal.css';
import './CatList.css'
import '../App.css';


const CatEditForm = ({ cat, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        breed: '',
        image: '',
        is_favorite: true,
    });

    useEffect(() => {
        if (cat) {
            setFormData({
                id: cat.id,
                api_id: cat.api_id,
                name: cat.name || '',
                description: cat.description || '',
                breed: cat.breed || '',
                image: cat.image_url || '',
                is_favorite: cat.is_favorite || true
            });
        }
    }, [cat]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //console.log('Submitting form data:', formData); 
            alert(`Go to Cats to see changes!`);
            await updateCatDetails(formData.id, {
                api_id: formData.api_id,
                name: formData.name,
                description: formData.description,
                breed: formData.breed,
                image_url: cat.image_url,
                is_favorite: cat.is_favorite


            });
            console.log('Submitting form data:', formData); 

            onSave(); 
            onClose(); 
        } catch (error) {
            console.error('Error updating cat:', error);
        }
    };

    if (!cat) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <div className="card">
                    <div className="image-preview">
                        <img src={formData.image} alt={formData.name} />
                        
                    </div>
                    <h3 className="image-overlay">{formData.breed}</h3>
                </div>
                <form onSubmit={handleSubmit} className="edit-form">
                    
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input
                            type="text"
                            id="breed"
                            name="breed"
                            value={formData.breed}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );
};


export default CatEditForm;
