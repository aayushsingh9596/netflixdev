import React  from 'react';
import { useSelector } from 'react-redux';
import VideoCards from './VideoCards';

const PlaylistPage = () => {

  const playListMovies=useSelector(store=>store?.playList?.Movies);

  console.log(playListMovies);

  return (
    <div className='w-screen'> 
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className='relative'/>
    <div className='absolute top-40 w-screen p-8'><VideoCards Movies={playListMovies} title="PlayList Movies"/></div>
    </div>
  )
}

export default PlaylistPage