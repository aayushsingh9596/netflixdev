import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlaying } from "../utils/moviesSlice";

export const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = () => {
      fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((response) => {
          dispatch(addNowPlaying(response));
        })
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, [dispatch]);

 
};
