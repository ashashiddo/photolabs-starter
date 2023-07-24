import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = ({ favouritePhotos, updateDisplayAlert, setFill }) => {
    const [isFavPhotoExist, setIsFavPhotoExist] = useState (favouritePhotos.length > 0);
    
    const updateFav = () => {
        setIsFavPhotoExist(!isFavPhotoExist);
        updateDisplayAlert(!isFavPhotoExist); // Call the callback to update displayAlert in TopNavigation
    };
        
  return (
    <div className='fav-badge'>
      <FavIcon 
      width={20} 
      height={17}
      fill={isFavPhotoExist ? "#C80000" : "#EEEEEE"}
      displayAlert={isFavPhotoExist}
      setDisplayAlert={updateFav}
      setFill={setFill} // Pass down the setFill function
      />

    </div>
  ); 
};

export default FavBadge;