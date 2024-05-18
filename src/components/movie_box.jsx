import { Container, Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function MovieBox({movie,children}) {
  const baseUrl ="https://image.tmdb.org/t/p/w500/";
  const url = baseUrl+movie.backdrop_path;
  const id = movie.id
  return (
    <div className="col-sm-12 col-lg-6 col-xl-4 my-4 px-2">
    <Link  to={"/movie/"+id} >
    <div className="col text-start">{movie.title}</div>
    <img src={baseUrl + movie.backdrop_path} alt="image" width={"400px"}/>
    </Link>
    {children}
  </div>
  );
}

export default MovieBox;