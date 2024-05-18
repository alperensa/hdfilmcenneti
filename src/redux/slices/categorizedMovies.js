import { createSlice } from "@reduxjs/toolkit";


const categorizedMoviesSlice = createSlice({
    name:"categorizedMovies",
    initialState:{
        categories:[]
    },
    reducers:{
        addToCategory:(state,action) => {
            state.categories.push(action.payload)
        }
    }
})

export const getCategorizedMovies = (state) => state.categorizedMovies;

export const {
    addToCategory,
} = categorizedMoviesSlice.actions;

export default categorizedMoviesSlice;