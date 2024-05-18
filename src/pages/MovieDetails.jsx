import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import SimilarMovies from "../components/similar_movies";
import { addToFav } from "../redux/slices/favoriteMovies";
import { useDispatch } from "react-redux";
import { options } from "../constants/api";

function MovieDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [MovieDetails, setMovieDetails] = useState();
  const photoUrl = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const url = "https://api.themoviedb.org/3/movie/";
    fetch(url + id, options )
      .then((res) => res.json())
      .then((json) => setMovieDetails(json))
      .catch((err) => console.error("error:" + err));
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <div className="d-flex justify-content-center">
      <CircularProgress color="secondary" />
    </div>
  ) : (
    <div>
      <div className="container my-5 text-center align-items-center">
        <div className="bg-transparent my-5 display-6">
          {MovieDetails?.title} 
        </div>
        <div className="my-3 d-flex justify-content-between">
          <div className="lead">
          IMDB Points: {MovieDetails?.vote_average}/{MovieDetails?.vote_count }
          </div>
          <div className="text-danger lead">
          Release Date: {MovieDetails?.release_date}
        </div>
        </div>
       
        <img src={photoUrl + MovieDetails?.backdrop_path} alt="image" />
        <div className="text-start lead ">
          Language: {MovieDetails?.original_language}
        </div>
        <div className="text-start my-3">
          {MovieDetails?.overview}
        </div>
        <button  className="btn btn-outline-primary my-2" onClick={() => {dispatch(addToFav(MovieDetails))
        navigate("/favorites")
        }}>
          <i className="fa fa-plus-circle px-1"></i>
        Add to Favorites
        </button>
      </div>
      <div className="similar">
        <SimilarMovies  movieId={MovieDetails?.id}/>
      </div>
     
    </div>
  );
}

export default MovieDetails;
