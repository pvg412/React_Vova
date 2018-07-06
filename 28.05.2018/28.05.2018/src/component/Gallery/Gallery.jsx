import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Gallery = ({gallery}) => {
    return (
        <div>
            <h2>Gallery</h2>
            <div className="gallery">
                {gallery.map((elem) => (
                    <div className='gallery-item'>
                        <img src={elem.largeImageURL} alt='img' className='gallery-image'/>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Gallery;