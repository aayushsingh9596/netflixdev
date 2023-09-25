import React from 'react';
import { useSelector } from 'react-redux';
import VideoCards from './VideoCards.js';

const SecondaryContainer = () => {


  const NowPlayingMovies=useSelector(store=>store.movies.NowPlaying);
  const TopRatedMovies=useSelector(store=>store.movies.TopRated);


  return (
    <div className='text-white bg-gradient-to-t from-black w-screen -mt-60 text-start bg-black relative'>
      <VideoCards Movies={NowPlayingMovies} title="NowPlaying Movies"/>
      <VideoCards Movies={TopRatedMovies} title="Top Rated Movies"/>
      </div>
  )
}

export default SecondaryContainer