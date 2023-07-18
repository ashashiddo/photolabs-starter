import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) =>{ 
return(
<div className="home-route">
    <TopNavigationBar displayAlert={props.displayAlert} setDisplayAlert={props.setDisplayAlert} fill={props.fill} setFill={props.setFill} />
    <PhotoList displayAlert={props.displayAlert} setDisplayAlert={props.setDisplayAlert} fill={props.fill} setFill={props.setFill}/>
</div>
    )
}
export default HomeRoute;