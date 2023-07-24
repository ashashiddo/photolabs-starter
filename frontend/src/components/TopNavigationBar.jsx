import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ favouritePhotos }) => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [fill, setFill] = useState('#EEEEEE'); // Add fill state here
  
    return (
      <div className="top-nav-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList />
        <FavBadge 
        favouritePhotos={favouritePhotos}
        updateDisplayAlert={setDisplayAlert} // Pass down the setDisplayAlert function
        setFill={setFill} // Pass down the setFill function
      />
       {displayAlert && <span className="notification">New favourite photo!</span>}
    </div>
    );
};

export default TopNavigation;