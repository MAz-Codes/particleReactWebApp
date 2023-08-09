import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Video = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="music-overlay">
            <button className="close-button" onClick={props.onCloseVideo}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
                {/* The content of your Video component goes here */}
                Video content here...
            </div>
        </div>
    );
});

export default Video;
