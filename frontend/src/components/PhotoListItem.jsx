
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton' 


const PhotoListItem = (props) => {
  /* Insert React */

  const { toggleFavourite } = props; // Add this line to extract the toggleFavourite prop

  const handleClick = () => {
    toggleFavourite(props.props.id); // Call the toggleFavourite function with the photo ID
    handlePhotoClick(); // Call the handlePhotoClick function when a photo is clicked
  };


  const username = props.props.user.username  || props.props.username
  const imageSource = props.props.urls.full || props.imageSource
  const id = props.props.id || props.id
  const location = props.props.location || props.location
  const profile = props.props.urls.regular  || props.profile

  return (
    
    <div className="photo-list__item" id={id}>
        <PhotoFavButton 
        // className="photo-list--fav-icon"  
        displayAlert={props.displayAlert} 
        setDisplayAlert={props.setDisplayAlert} 
        fill={props.fill} 
        setFill={props.setFill}
        toggleFavourite={toggleFavourite} // Pass the toggleFavourite prop to the PhotoFavButton component
        />
        <img className="photo-list__image" src={imageSource} onClick={handleClick}/>
      
    </div>
  )
}

export default PhotoListItem