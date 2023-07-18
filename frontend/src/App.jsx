import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [fill, setFill] = useState('white');
    return(
    <div className="App">
        <HomeRoute displayAlert={displayAlert} setDisplayAlert={setDisplayAlert} fill={fill} setFill={setFill} />
    </div>
    )}



export default App