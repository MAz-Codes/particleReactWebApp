import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Video = ({ onCloseVideo }) => {
    return (
        <div className="music-overlay">
            <button className="close-button" onClick={onCloseVideo}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Music component goes here */}
                Video content here...
            </div>
        </div>
    );
}

export default Video;
