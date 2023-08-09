import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Research = ({ onCloseResearch }) => {
    return (
        <div className="music-overlay">
            <button className="close-button" onClick={onCloseResearch}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Music component goes here */}
                Research content here...
            </div>
        </div>
    );
}

export default Research;
