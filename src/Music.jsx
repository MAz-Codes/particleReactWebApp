import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Music = ({ onClose }) => {
    return (
        <div className="music-overlay">
            <button className="close-button" onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Music component goes here */}
                Music content here...
            </div>
        </div>
    );
}

export default Music;
