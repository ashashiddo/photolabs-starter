import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import photos from '../mocks/photos'

const PhotoList = (props) => {
  return(
  <ul className="photo-list">
    {photos.map((photoItem, index)=>{
     return( <PhotoListItem key={index} props={photoItem} displayAlert={props.displayAlert} setDisplayAlert={props.setDisplayAlert} fill={props.fill} setFill={props.setFill}></PhotoListItem> )
    })}
  </ul>
  )
}

export default PhotoList