import { createSlice } from "@reduxjs/toolkit";



const allMoviesSlice = createSlice({
    name:"allMovies",
    initialState:{
        movies:[]
    },
    reducers:{
        saveMovies:(state,action) =>{
            if(!state.movies.find(movie=> movie.id ==action.payload.id)){
                state.movies.push(action.payload);
            }
        }
    }
})


export const getAllMovies = (state) => state.allMovies;

export const {
    saveMovies,
} = allMoviesSlice.actions;

export default allMoviesSlice;