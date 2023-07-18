import React, { useCallback} from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon--active">
      <div className="photo-list__fav-icon-svg">
      <FavIcon displayAlert={props.displayAlert} setDisplayAlert={props.setDisplayAlert} fill={props.fill} setFill={props.setFill}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
