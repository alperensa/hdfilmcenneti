import React from 'react'
import { useParams } from 'react-router-dom';
import { movie_genres } from '../constants/movie_genres';
import MovieBox from '../components/movie_box';

function Category() {
    const { id } = useParams();
    const cat = movie_genres.filter(genre => genre.id == id)
  return (
    <div className='container'>
        <div className='text-center text-danger display-6 my-2'>{cat[0].name} Movies</div>
        <div className='row'>

       
        {

        cat[0].movies && cat[0].movies.map(movie =>{
            return <MovieBox movie={movie}/>
        })
        }
         </div>
    </div>
  )
}

export default Category