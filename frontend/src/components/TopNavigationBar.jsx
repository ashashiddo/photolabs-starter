import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = () => {
    const [displayAlert, setDisplayAlert] = useState(false);
  
    return (
      <div className="top-nav-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList />
        <FavBadge 
        updateDisplayAlert={setDisplayAlert} // Pass down the setDisplayAlert function
        fill={'red'}
      />
       {displayAlert && <span className="notification">New favourite photo!</span>}
    </div>
    );
};

export default TopNavigation;