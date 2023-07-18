
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton' 


const PhotoListItem = ({props}) => {
  /* Insert React */

  const username = props.user.username  || props.username
  const imageSource = props.urls.full || props.imageSource
  const id = props.id
  const location = props.location
  const profile = props.urls.regular  || props.profile
  console.log(props)
  return (
    
    <div className="photo-list__item">
        <PhotoFavButton className="photo-list--fav-icon"/>
        <img className="photo-list__image" src={imageSource}/>
        {/* <div className='photo-list__user-profile '>
            <div className='photo-list__user-info'>
                <div className='photo-list__user-details '>{username},                 {profile}
</div>  
                <div className='photo-list__user-location '> {location.city}, {location.country}</div>

            </div>
        </div> */}
      
    </div>
  )
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem