import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteMoviesSlice from "./slices/favoriteMovies";
import categorizedMoviesSlice from "./slices/categorizedMovies";
import allMoviesSlice from "./slices/allMovies";



 const store = configureStore ({
    reducer:{
        favoriteMovies: favoriteMoviesSlice.reducer,
        categorizedMovies: categorizedMoviesSlice.reducer,
        allMovies: allMoviesSlice.reducer
    }

})

export default store;