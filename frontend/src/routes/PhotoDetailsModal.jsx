import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';

export const PhotoDetailsModal = ({toggleModal,photoDetails,displayAlert, setDisplayAlert,setModalIsOpen,setSelectedPhoto,modalIsOpen}) =>{
    console.log(photoDetails) 
    return(
  <div className='photo-details-modal'>
    <button className='photo-details-modal--close-button' onClick={()=>{toggleModal()}}>
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            
          <clipPath id="clip0_428_287">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <div style={{margin:"30px"}}>
    <img className="photo-details-modal--images" width="100%" height="500px" src={photoDetails.imageSourceFull} />
   <div>
  
    <div style={{display:"flex", flexDirection:"row",alignItems:"flex-end"}}>
    <img className="photo-details-modal-profile" style={{borderRadius:"40px"}}width="10%" height="10%" src={photoDetails.profile} />
       <div>
        <div style={{color:"black", fontWeight:"900",marginLeft:"10px"}}>
        {photoDetails.username}
        </div>
        <div style={{color:"grey",marginLeft:"10px"}}>
        {photoDetails.location.city}, {photoDetails.location.country}
        </div>
        </div>

    </div>
    <header className='photo-details-modal--header'>Similar photos</header>

    </div>
    </div>
   

<PhotoList
  photos={photos}
  displayAlert={displayAlert}
  setDisplayAlert={setDisplayAlert}
  setModalIsOpen={setModalIsOpen}
  setSelectedPhoto={setSelectedPhoto}
  modalIsOpen={modalIsOpen}
  />
  </div>
)}

export default PhotoDetailsModal;