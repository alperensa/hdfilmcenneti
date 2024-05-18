import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFav, getFavoriteMovies } from "../redux/slices/favoriteMovies";
import GenreList from "../components/genre_list";
import MovieBox from "../components/movie_box";

function FavoriteMovies() {
  const { movieList } = useSelector(getFavoriteMovies);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        {movieList.map((movie) => {
          return (
            <MovieBox movie={movie}>
              <button
                className="btn btn-danger my-2 "
                onClick={() => dispatch(deleteFromFav(movie))}
              >
                <i className="fa fa-minus-circle mx-2"></i>
                Remove From Favorites
              </button>
            </MovieBox>
          );
        })}
      </div>
    </div>
  );
}

export default FavoriteMovies;
