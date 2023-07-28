import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = ({ favouritePhotos, updateDisplayAlert, setFill, fill }) => {
    //const [isFavPhotoExist, setIsFavPhotoExist] = useState (false);
    
//     useEffect(() => {
//     setIsFavPhotoExist(favouritePhotos && favouritePhotos.length > 0); // Update isFavPhotoExist when favouritePhotos change
//   }, [favouritePhotos]);

    
    // const updateFav = () => {
    //     setIsFavPhotoExist(!isFavPhotoExist);
    //     updateDisplayAlert(!isFavPhotoExist); // Call the callback to update displayAlert in TopNavigation
    // };
        
  return (
    <div className='fav-badge'>
      <FavIcon 
      width={20} 
      height={17}
      fill={fill}
   
      />

    </div>
  ); 
};

export default FavBadge;