import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { movie_genres } from "../constants/movie_genres";
import { Link } from "react-router-dom";
import { getAllMovies, saveMovies } from "../redux/slices/allMovies";

export default function Categories() {
  const {movies} = useSelector(getAllMovies)
  const dispatch = useDispatch();
  return (
    <div className="container my-4">
      <div className="display-6 lead text-danger my-2 ">Categories </div>
      <div className="row">
        {movie_genres.map((genre) => {
          
          return (
            <div className="col-md-6">
              <Link to={"/categories/" + genre.id}>
                <div className="lead my-2 hovered">{genre.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
