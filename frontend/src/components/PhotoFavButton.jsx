import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [fill, setFill] = useState('white');

  return (
    <div className="photo-list__fav-icon--active">
      <div className="photo-list__fav-icon-svg">
      <FavIcon displayAlert={displayAlert} setDisplayAlert={setDisplayAlert} fill={fill} setFill={setFill}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
