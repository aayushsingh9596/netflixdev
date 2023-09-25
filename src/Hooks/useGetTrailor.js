import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addBannerTrailor } from "../utils/moviesSlice";

export const useGetTrailor = (id) => {
 const dispatch=useDispatch();
  useEffect(() => {
    const fetchMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", options)
          .then((response) => response.json())
          .then((response) => {
            dispatch(addBannerTrailor(response))
          })
          .catch((err) => console.error(err));
      };
      if(id) fetchMovies();
  }, [dispatch,id]);
};
