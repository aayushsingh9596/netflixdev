import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useGetNowPlayingMovies } from "../Hooks/useGetNowPlayingMovies";
import { useGetTopRatedMovies } from "../Hooks/useGetTopRatedMovies";

const Browse = () => {
  useGetNowPlayingMovies();
  useGetTopRatedMovies();

  return (
    <div className="w-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
