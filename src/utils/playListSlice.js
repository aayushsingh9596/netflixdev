import { createSlice } from "@reduxjs/toolkit";

const playListSlice = createSlice({
  name: 'playList',
  initialState:{
    Movies:[],
    MovieIds:[]
  },
  reducers: {
    addMovie: (state,action) => {
      state.Movies.push(action.payload);
    },
    removeMovie: (state,action) => {
      state.Movies=state.Movies.filter(Movie=>Movie.id!==action.payload);
    },
    addMovieId: (state,action) => {
      state.MovieIds.push(action.payload);
    },
    removeMovieId: (state,action) => {
      state.MovieIds=state.MovieIds.filter(MovieId=>MovieId!==action.payload);
    },
  },
});

export const { addMovie,removeMovie,addMovieId,removeMovieId} = playListSlice.actions;
export default playListSlice.reducer;
