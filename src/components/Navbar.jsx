import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import { getFavoriteMovies } from '../redux/slices/favoriteMovies'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
 const movies = useSelector(getFavoriteMovies);
  const [search, setSearch] = useState("")
  const handleChange = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand disabled-link" to="/">HD Film Cenneti</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="categories">Categories</Link>
        </li>

        <li className='nav-item'>
        <Link className="nav-link active px-2" to="favorites" >
          Favorite Movies
         ({movies.movieList.length}) 

        </Link>
      </li>
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2 bg-dark border-danger" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={search} />
          <Link to={"search/"+search}>
        <button onClick={()=> setSearch("")} className='btn btn-outline-danger my-2 my-sm-0' type='submit'>Search
        </button>
          </Link>
      </form>
      
    </div>
  </div>
</nav>
<Outlet />
</>
  )
}

export default Navbar