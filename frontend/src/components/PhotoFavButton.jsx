import React, { useState } from 'react';
// import React, { useCallback } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
    const { id, toggleFavourite } = props;

  const handleToggleFavourite = () => {
    props.clickFav(id)
  };


  return (
    
    // <div className="photo-list__fav-icon--active" id={props.id}>
    <div 
    className= "photo-list__fav-icon"
    id={id}
      onClick={handleToggleFavourite}
    >
      <div className="photo-list__fav-icon-svg">
      <FavIcon 
      displayAlert={props.displayAlert} 
      fill={props.fill} 
      setFill={props.setFill}
      toggleFavourite={toggleFavourite}
      />
      </div>
    </div>
  );
}

export default PhotoFavButton;
