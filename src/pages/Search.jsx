import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieBox from '../components/movie_box';
import { options } from '../constants/api';

function Search() {
    const { movie } = useParams();
    const [similars,setSimilars] = useState([]);
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
       
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => setSimilars(json.results))
          .catch(err => console.error('error:' + err));
    }, [])
  return (
    <div className='container'>
      <div className='row'>
        
     
        {
            similars.map(movie=>{
                return <MovieBox movie={movie}/>
            })
        }
         </div>
    </div>
  )
}

export default Search