import React, { useState } from "react";
import VideoPopUp from "./VideoPopUp";

const VideoCard = ({ Movie }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  console.log(Movie);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const resetIframe = () => {
    const iframe = document.querySelector(".video-popup iframe");
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
  func: 'pauseVideo' }), '*');
  };

  if(Movie?.backdrop_path===null) return

  return (
    <div className="flex-shrink-0 w-80 bg-black">
      <div
        className="flex flex-col items-center justify-center"
        onMouseEnter={showPopup}
        onMouseLeave={() => {
          hidePopup();
          resetIframe(); // Reset the iframe when mouse leaves
        }}
      >
        <img
          className="w-72 mt-8 mb-12"
          id={Movie?.id}
          src={`http://image.tmdb.org/t/p/w500/${Movie?.backdrop_path}`}
          alt=""
        ></img>
       <VideoPopUp isPopupVisible={isPopupVisible} Movie={Movie}/>
      </div>
    </div>
  );
};

export default VideoCard;