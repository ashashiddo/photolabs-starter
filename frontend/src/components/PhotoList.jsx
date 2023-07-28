import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({
    displayAlert,
    setDisplayAlert,
    photos
  }) => {
// console.log((displayAlert.includes(index)? 'red':'white' ))
    return (
      <ul className="photo-list">
        {photos.map((photoItem, index) => (
          <PhotoListItem
            id={index}
            key={index}
            props={photoItem}
            displayAlert={displayAlert}
            setDisplayAlert={setDisplayAlert}
            />
          ))}
      </ul>
    );
  };

export default PhotoList