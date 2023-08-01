import React, { useEffect, useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the PhotoDetailsModal component
// Note: Rendering a single component to build components in isolation
import useApplicationData from './hooks/useApplicationData';
const App = () => {
    const {
         state,
        // onPhotoSelect,
        // updateToFavPhotoIds,
        // onLoadTopic,
        // onClosePhotoDetailsModal,
        showDisplayAlert,
        updateSelectedPhoto,
        toggleModal
      } = useApplicationData();
  
     
 
    return(
    <div className="App">
        <HomeRoute 
        displayAlert={state.displayAlert} 
        setDisplayAlert={showDisplayAlert} 
        toggleModal={toggleModal} 
        setSelectedPhoto={updateSelectedPhoto}
        />
        
      {state.modalIsOpen && (
        <PhotoDetailsModal
          photoDetails={state.selectedPhoto}
          toggleModal={toggleModal} // Pass toggleModal to the PhotoDetailsModal component
          displayAlert={state.displayAlert} 
          setDisplayAlert={showDisplayAlert} 
          setSelectedPhoto={updateSelectedPhoto}
          modalIsOpen={state.modalIsOpen}
        />
      )}
      </div>
    );
    }; 



export default App