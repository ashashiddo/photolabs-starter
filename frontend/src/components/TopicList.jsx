import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
 import topics from '../mocks/topics'
const TopicList = (props) => {
    return(
  <div className="top-nav-bar__topic-list">
    {topics.map((topicItem, index)=>{
     return( <TopicListItem key={index} props={topicItem}></TopicListItem> )
    })}

  </div>)
}

export default TopicList