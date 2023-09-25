import React from "react";

const VideoTitle = ({trailor}) => {
  if(!trailor) return
  const {original_title,overview}=trailor;
  return (
    <div className="absolute text-white w-screen aspect-video bg-gradient-to-r from-black flex flex-col justify-center">
      <div className="flex flex-col m-1 p-1">
      <h1 className="font-bold text-6xl self-start text-left pl-2 mb-4">{original_title}</h1>
      <p className="font-medium self-start overflow-ellipsis text-left pl-2 w-96">{overview}</p>
      </div>
      <div className="flex m-1 p-1">
        <button className="bg-white text-black m-1 w-32 h-12 flex justify-center items-center opacity-80 rounded-sm">
          <img
            className="w-8"
            src="https://miro.medium.com/v2/da:true/resize:fit:768/1*IDJ4x4E-bOypnEZdA5TGHQ.gif"
            alt="Play"
          />
          <h1>Play</h1>
        </button>
        <button className="bg-slate-500 opacity-80 text-white m-1 w-32 h-12 justify-center items-center rounded-sm">
          <h1>More Info</h1>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
