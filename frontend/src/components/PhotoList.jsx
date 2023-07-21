import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import photos from '../mocks/photos'

const PhotoList = ({
    displayAlert,
    setDisplayAlert,
    fill,
    setFill,
    favouritePhotos,
    setFavouritePhotos,
    toggleFavourite, // Make sure toggleFavourite is defined here
  }) => {
    return (
      <ul className="photo-list">
        {photos.map((photoItem, index) => (
          <PhotoListItem
            key={index}
            props={photoItem}
            displayAlert={displayAlert}
            setDisplayAlert={setDisplayAlert}
            fill={fill}
            setFill={setFill}
            favouritePhotos={favouritePhotos}
            setFavouritePhotos={setFavouritePhotos}
            toggleFavourite={toggleFavourite} // Pass toggleFavourite here
          />
        ))}
      </ul>
    );
  };

export default PhotoList