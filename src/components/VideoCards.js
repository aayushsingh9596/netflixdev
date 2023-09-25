import React from "react";
import VideoCard from "./VideoCard";

const VideoCards = ({ Movies, title }) => {
  console.log(Movies);
  console.log(title);

  return (
    <>
      {" "}
      <h1 className="text-2xl text-white ml-4">{title}</h1>
      <div className="flex overflow-scroll no-scrollbar">
        {title === "PlayList Movies"
          ? Movies?.map((Movie) => {
              return <VideoCard Movie={Movie} />;
            })
          : Movies?.results?.map((Movie) => {
              return <VideoCard Movie={Movie} />;
            })}
      </div>
    </>
  );
};

export default VideoCards;
