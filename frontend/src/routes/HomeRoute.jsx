import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';

const HomeRoute = ({ 
    displayAlert, 
    setDisplayAlert, 
    setModalIsOpen,
    setSelectedPhoto
}) =>{ 
   
return(

   <div className="home-route">
    <TopNavigationBar
        displayAlert={displayAlert}
        fill={'red'}
        />
    <PhotoList
        photos={photos}
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
        setModalIsOpen={setModalIsOpen}
        setSelectedPhoto={setSelectedPhoto}
        />
        </div>
      );
    };

export default HomeRoute;