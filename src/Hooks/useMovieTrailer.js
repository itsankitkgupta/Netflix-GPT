import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";



const useMovieTrailer = ({movieID})=>{

  const dispatch = useDispatch()
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
    // console.log(trailerVID?.key);
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);

}
export  default useMovieTrailer