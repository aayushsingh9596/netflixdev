import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

export const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = () => {
      fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", options)
        .then((response) => response.json())
        .then((response) => {
          dispatch(addTopRated(response));
        })
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, [dispatch]);

 
};
