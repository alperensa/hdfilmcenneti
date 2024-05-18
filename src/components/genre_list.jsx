import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MovieBox from "./movie_box";
import { useDispatch } from "react-redux";

function GenreList({ list }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {};
  }, []);

  if(list.movies.length>0){
    return (
        <div className="row" key={list.movies.id}>
          <div className="display-6 mb-2 text-danger">{list.name} </div>
          {list.movies.map((element) => {

            return (
            <MovieBox movie={element}/>
        );
          })}
        </div>
      );
    }
  
}

export default GenreList;
