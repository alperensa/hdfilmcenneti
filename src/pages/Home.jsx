import React, { useEffect, useState } from "react";
import { movie_genres } from "../constants/movie_genres";
import GenreList from "../components/genre_list";
import { useDispatch, useSelector } from "react-redux";
import { addToCategory } from "../redux/slices/categorizedMovies";
import { options } from "../constants/api";
function Home() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        dispatch(addToCategory(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  movies.map((movie) => {
    if (
      !movie_genres.find((item) => item.movies.find((id) => id.id == movie.id))
    ) {
      for (let index = 0; index < movie.genre_ids.length; index++) {
        movie_genres
          .find((item) => item.id === movie.genre_ids[index])
          ?.movies.push(movie);
      }
    }
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="display-6 text-center text-danger my-2">
            Popular Movies
          </div>
          {movie_genres.map((genre) => {
            return <GenreList list={genre} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
