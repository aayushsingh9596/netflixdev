import React, { useEffect, useRef, useState } from 'react';
import { options } from '../utils/constants';
import VideoCards from './VideoCards';

const GPTSearchPage = () => {

    const inputref=useRef();

    const [movies,setMovies]=useState();
    const [searchQuery,setsearchQuery]=useState("");
    const [inputValue,setInputValue]=useState("");

    useEffect(()=>{
        const getMovies=async()=>{

            const data=await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}`, options);
            const movies=await data.json();
            setMovies(movies)
        }
        getMovies();
    },[searchQuery])

  return (
    <div className='w-screen'> 
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className='relative'/>
    <div className='bg-black text-white absolute w-1/2 h-16 p-2 rounded-lg z-10 top-20 left-1/4 flex items-center'>
        <input placeholder="Search For Movies" ref={inputref} type="text" value={inputValue} className='w-3/4 h-12 rounded-lg text-black p-2' onChange={(e)=>setInputValue(e.target.value)}/>
        <button className='bg-red-800 w-1/4 h-12 rounded-lg' onClick={()=>setsearchQuery(inputref.current.value)}>Search</button>
    </div>
    <div className='absolute top-40 w-screen p-8'><VideoCards Movies={movies} title="Search Results"/></div>
    </div>
   
  )
}

export default GPTSearchPage