import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ onCloseContact }) => {
    return (
        <div className="music-overlay">
            <button className="close-button" onClick={onCloseContact}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Music component goes here */}
                Contact content here...
            </div>
        </div>
    );
}

export default Contact;
