import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({movieID}) => {
  const trailerVID = useSelector(store=>store.movies?.trailerVideo)
useMovieTrailer({movieID})
  return (
    <div>
     <iframe
  className="w-screen aspect-video"
  src={"https://www.youtube.com/embed/" + trailerVID?.key + "?autoplay=1&mute=1"}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

    </div>
  );
};

export default VideoBackground;
