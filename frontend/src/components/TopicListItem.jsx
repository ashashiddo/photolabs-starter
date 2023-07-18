import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = ({props}) => {
    const id = props.id
    const slug = props.slug
    const title = props.title
    return (
  <div className="topic-list__item">
    <span className='topic-list__item span'>
    <div>{title}</div>
    </span>
  </div>)
}

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
}
export default TopicListItem