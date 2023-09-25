import React from 'react';
import { useParams } from 'react-router';

const WatchPage = () => {

  const param=useParams();

  return (
    <div className='w-screen aspect-video'>
      <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${param.key}?si=o8MJU5oN7VN7mq9i`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage