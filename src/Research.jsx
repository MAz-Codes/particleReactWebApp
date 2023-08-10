import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Research = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseResearch}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Research component goes here */}
                Research content here...
            </div>
        </div>
    );
});

export default Research;