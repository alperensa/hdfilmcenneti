import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieBox from './movie_box';
import { Box } from '@mui/material';
import { options } from '../constants/api';


function SimilarMovies({movieId}) {
    const { id } = useParams();
    const [similars, setSimilars] = useState([])
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
        
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => setSimilars(json.results))
          .catch(err => console.error('error:' + err));
    }, [])
  return (
    <div className='container'>
      <div className='text-danger lead display-6'>
        Similar Movies
      </div>
      <div className='row'>
        {
            similars.map((movie,index)=>{
                if(index<6) 
                  return <MovieBox  movie={movie}/>
            })
        }
        </div>
        </div>
  )
}

export default  SimilarMovies