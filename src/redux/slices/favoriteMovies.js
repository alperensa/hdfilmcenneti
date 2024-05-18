import { createSlice } from "@reduxjs/toolkit";


const favoriteMoviesSlice = createSlice({
    name:"favoriteMovies",
    initialState:{
        movieList:[]
    },
    reducers:{
        addToFav:(state,action) => {
            if(!state.movieList.find(movie => movie.id == action.payload.id)){
                state.movieList.push(action.payload)
            }
        },
        deleteFromFav:(state,action) => {
            state.movieList= state.movieList.filter(movie => movie.id !== action.payload.id)
        }
        
    }
})

export const getFavoriteMovies = (state) => state.favoriteMovies;

export const {
    addToFav,
    deleteFromFav,
} = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice;