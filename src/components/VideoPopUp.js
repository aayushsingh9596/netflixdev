import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, addMovieId, removeMovie, removeMovieId } from "../utils/playListSlice";

const VideoPopUp = ({ isPopupVisible, Movie }) => {


  const isMoviePresent=useSelector(store=>store.playList.MovieIds).includes(Movie.id);;
  console.log(isMoviePresent);

  const dispatch = useDispatch();
  const [trailor, setTrailor] = useState();
  const { original_title, name } = Movie;
  const navigate = useNavigate();
  useEffect(() => {
    const getVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          Movie?.id +
          "/videos?language=en-US",
        options
      );
      const Videos = await data.json();

      let trailors;

      if (Videos?.results?.length === 0 || undefined) setTrailor("HDcSDazyNY0");
      else {
        trailors = Videos?.results?.filter((Video) => Video.type === "Trailer");

        if (trailors?.length === 0) setTrailor(Videos.results[0].key);
        else if (trailors?.length >= 1) setTrailor(trailors[0].key);
      }
    };
    if (Object.keys(Movie).length !== 0) getVideo();
  }, [Movie]);

  return (
    <div
      className={`absolute w-72 rounded-md ${
        isPopupVisible ? "" : "hidden"
      } hover:cursor-pointer video-popup bg-slate-900 flex flex-col items-center`}
    >
      <iframe
        className="w-72 aspect-video rounded-lg bg-black-800"
        title="YoutubeVideo"
        src={`https://www.youtube.com/embed/${trailor}?enablejsapi=1si=HLMmV0EZzzc8pDfD`}
      ></iframe>
      <div className="flex items-center h-16 w-72 justify-evenly">
        <button
          className="bg-white text-black w-16 rounded-lg h-12 z-70"
          onClick={(e) => {
            console.log("Watch Now Clicked");
            navigate(`/watchPage/${trailor}`);
          }}
        >
          Watch Now
        </button>
        <button
          className="bg-white text-black w-16 rounded-lg h-12 z-70"
          onClick={(e) => {
            if(isMoviePresent)
            {
              dispatch(removeMovie(Movie.id));
              dispatch(removeMovieId(Movie.id));
            } 
            else 
            {
              dispatch(addMovie(Movie))
              dispatch(addMovieId(Movie.id));
            }
          }}
        >
        {isMoviePresent?"Remove from PlayList":"Add To PlayList"}
        </button>
        <h2 className="text-lg text-white">
          {original_title ? original_title : name}
        </h2>
      </div>
    </div>
  );
};

export default VideoPopUp;
