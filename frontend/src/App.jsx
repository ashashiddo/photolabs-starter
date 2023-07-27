import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the PhotoDetailsModal component
import photos from './mocks/photos'; // Import your photos data

// Note: Rendering a single component to build components in isolation
const App = () => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [fill, setFill] = useState('white');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
    
      const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        toggleModal(); // Call toggleModal to show the modal
      };
    
    return(
    <div className="App">
        <HomeRoute 
        displayAlert={displayAlert} 
        setDisplayAlert={setDisplayAlert} 
        fill={fill} 
        setFill={setFill}
        toggleFavourite={() => {}} // Dummy toggleFavourite function for now
        handlePhotoClick={handlePhotoClick} // Pass handlePhotoClick to the HomeRoute component 
        />
        
      {isModalOpen && (
        <PhotoDetailsModal
          photoDetails={selectedPhoto}
          toggleModal={toggleModal} // Pass toggleModal to the PhotoDetailsModal component
        />
      )}
      </div>
    );
    }; 



export default App