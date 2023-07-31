
import React, { useState } from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton' 
import PhotoDetailsModal from '../routes/PhotoDetailsModal';


const PhotoListItem = (props) => {
   
//   const username = props.props.user.username  || props.props.username
  const imageSourceRegular = props.props.urls.full || props.imageSourceRegular
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
   console.log('**',props)
   const openModal = ()=>  {
    props.setModalIsOpen(true)
    props.setSelectedPhoto({
        username : props.props.user.username,  
        imageSourceRegular :props.props.urls.regular, 
        imageSourceFull :props.props.urls.full, 
        id : props.props.id,
        location : props.props.location,
        profile : props.props.user.profile 
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
        <img className="photo-list__image" src={imageSourceRegular} />
        <div style={{display:"flex", flexDirection:"row",alignItems:"flex-end"}}>

<img className="photo-details-modal-profile" style={{borderRadius:"40px"}}width="70px" height="10%" src={props.props.user.profile } />




       <div>
        <div style={{color:"black", fontWeight:"900",marginLeft:"10px"}}>
        {props.props.user.username}
        </div>
        <div style={{color:"grey",marginLeft:"10px"}}>
        {props.props.location.city}, {props.props.location.country}
        </div>
        </div>

    </div>
    </div>
  )
}

export default PhotoListItem
