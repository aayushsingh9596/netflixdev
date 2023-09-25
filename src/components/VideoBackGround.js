const VideoBackGround = ({trailor}) => {

  if(!trailor) return

  return (
    <div className="w-screen aspect-auto bg-gradient-to-r from-black to-slate-50">
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailor.key}?si=Q1AjkGuJCvoCiqpc&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
