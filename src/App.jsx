import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MovieDetails from "./pages/MovieDetails";
import Categories from "./pages/Categories";
import FavoriteMovies from "./pages/Favorites";
import Search from "./pages/Search";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/categories/" element={<Categories />} />
            <Route path="/categories/:id" element={<Category />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavoriteMovies />} />
            <Route path="/search/:movie" element={<Search />} />
            <Route index element={<Home />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
