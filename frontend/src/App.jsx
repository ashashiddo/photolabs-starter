import React, { useEffect, useState } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the PhotoDetailsModal component
import photos from './mocks/photos'; // Import your photos data

// Note: Rendering a single component to build components in isolation
const App = () => {
    const [displayAlert, setDisplayAlert] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
    
     
 
    return(
    <div className="App">
        <HomeRoute 
        displayAlert={displayAlert} 
        setDisplayAlert={setDisplayAlert} 
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