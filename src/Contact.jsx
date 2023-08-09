import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Contact = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseContact}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Contact component goes here */}
                Contact content here...
            </div>
        </div>
    );
});

export default Contact;
