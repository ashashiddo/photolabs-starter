import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = ({ 
    displayAlert, 
    setDisplayAlert, 
    fill, 
    setFill, 
    handlePhotoClick 
}) =>{ 
    const [favouritePhotos, setFavouritePhotos] = useState(new Set());

    const toggleFavourite = (id) => {
        const newFavourites = new Set(favouritePhotos); // Create a copy of the current Set 
        if (newFavourites.has(id)) {
          newFavourites.delete(id); // Remove the photo ID from the copy
        } else {
          newFavourites.add(id); // Add the photo ID to the copy
        }   
        setFavouritePhotos(newFavourites); // Update the state with the modified copy
    };
       
return(

   <div className="home-route">
    <TopNavigationBar
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
        fill={fill}
        setFill={setFill}
        // favouritePhotos={favouritePhotos}
        // setFavouritePhotos={setFavouritePhotos}
        />
    <PhotoList
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
        fill={fill}
        setFill={setFill}
        favouritePhotos={[...favouritePhotos]} // set to an array
        setFavouritePhotos={setFavouritePhotos}
        toggleFavourite={toggleFavourite} // Pass toggleFavourite here
        handlePhotoClick={handlePhotoClick} // Pass handlePhotoClick to the PhotoList component
        />
        </div>
      );
    };

export default HomeRoute;