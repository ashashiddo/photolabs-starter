import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({
    displayAlert,
    setDisplayAlert,
    photos,
    setModalIsOpen,
    setSelectedPhoto,
    modalIsOpen

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
            setModalIsOpen={setModalIsOpen}
            setSelectedPhoto={setSelectedPhoto}
            modalIsOpen={modalIsOpen}

            />
          ))}
      </ul>
    );
  };

export default PhotoList