import React, { useState } from 'react';
// import React, { useCallback } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
    const { id, toggleFavourite } = props;
  const [selected, setSelected] = useState(false);

  const handleToggleFavourite = () => {
    setSelected(!selected);
    toggleFavourite(id); // Call the toggleFavourite function from props with the photo ID
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
      setDisplayAlert={props.setDisplayAlert} 
      fill={props.fill} 
      setFill={props.setFill}
      toggleFavourite={toggleFavourite}
      />
      </div>
    </div>
  );
}

export default PhotoFavButton;
