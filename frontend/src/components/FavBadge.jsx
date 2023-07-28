import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = ({ anyFavorites, fill }) => {        
  return (
    <div className='fav-badge'>
      <FavIcon 
      width={20} 
      height={17}
      fill={fill}
      anyFavorites={anyFavorites}
   
      />

    </div>
  ); 
};

export default FavBadge;