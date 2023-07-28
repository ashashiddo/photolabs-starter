
import React, { useState } from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton' 
import PhotoDetailsModal from '../routes/PhotoDetailsModal';


const PhotoListItem = (props) => {
   
//   const username = props.props.user.username  || props.props.username
  const imageSource = props.props.urls.full || props.imageSource
  const id = props.props.id || props.id
//   const location = props.props.location || props.location
//   const profile = props.props.urls.regular  || props.profile
const clickFav =()=>{
    console.log(props.displayAlert)
     if(props.displayAlert.includes(props.props.id)){
        let newDisplayAlert = [...props.displayAlert]
        newDisplayAlert.splice(newDisplayAlert.indexOf(props.props.id), 1);
        props.setDisplayAlert([...newDisplayAlert])
     }else{
        props.setDisplayAlert([...props.displayAlert,props.props.id])
     }
   }
   const openModal = ()=>  {
    props.setModalIsOpen(true)
    props.setSelectedPhoto({
        username : props.props.user.username,  
        imageSource :props.props.urls.full, 
        id : props.props.id,
        location : props.props.location,
        profile : props.props.urls.regular 
    })

   }

  return (
    
    <div className="photo-list__item" id={id}  onClick={()=>{openModal()}}>
        <PhotoFavButton 
             clickFav={clickFav} 
        // className="photo-list--fav-icon"  
        displayAlert={props.displayAlert} 
        fill={(props.displayAlert.includes(id)? 'red':'white' )}

        />
        <img className="photo-list__image" src={imageSource} />
      
    </div>
  )
}

export default PhotoListItem