import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({
    displayAlert,
    setDisplayAlert,
    photos,
    setSelectedPhoto,
    modalIsOpen,
    toggleModal

  }) => {
   
    return (
      <ul className="photo-list">
        {photos.map((photoItem, index) => (
          <PhotoListItem
            id={index}
            key={index}
            props={photoItem}
            displayAlert={displayAlert}
            setDisplayAlert={setDisplayAlert}
            toggleModal={toggleModal}
            setSelectedPhoto={setSelectedPhoto}
            modalIsOpen={modalIsOpen}

            />
          ))}
      </ul>
    );
  };

export default PhotoList