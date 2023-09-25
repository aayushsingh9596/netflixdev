import React, { useEffect, useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";
import { useGetTrailor } from "../Hooks/useGetTrailor";

const MainContainer = () => {
  const [randomMovieTrailor, setrandomMovieTrailor] = useState();
  const NowPlaying = useSelector((store) => store?.movies?.NowPlaying);
  const BannerTrailors = useSelector((store) => store?.movies?.BannerTrailor);

  const [trailor, setTrailor] = useState();

  useEffect(() => {
    if (Object.keys(NowPlaying).length !== 0) {
      setrandomMovieTrailor(NowPlaying?.results[Math.floor(Math.random() * 20)]);
    }
  }, [NowPlaying]);

  useEffect(() => {
    if (Object.keys(BannerTrailors).length !== 0) {
      const trailors = BannerTrailors?.results?.filter(
        (BannerTrailor) => BannerTrailor.type === "Trailer"
      );
      if (trailors?.length === 0) setTrailor(BannerTrailors[0]);
      else if (trailors?.length > 1) setTrailor(trailors[0]);
    }
  }, [BannerTrailors]);

  useGetTrailor(randomMovieTrailor?.id);

  return (
    <div className="">
      <VideoTitle trailor={randomMovieTrailor} />
      <VideoBackGround trailor={trailor} />
    </div>
  );
};

export default MainContainer;