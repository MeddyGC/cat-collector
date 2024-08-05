import React from 'react';
import './Modal.css';

const Modal = ({ cat, onClose }) => {
    if (!cat) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={cat.image_url} alt={cat.name} className="modal-image" />
                <div className="cat-details">
                    <p><strong>ID:</strong> {cat.id}</p>
                    <p><strong>API ID:</strong> {cat.api_id}</p>
                    <p><strong>Name:</strong> {cat.name}</p>
                    <p><strong>Description:</strong> {cat.description}</p>
                    <p><strong>Breed:</strong> {cat.breed}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
