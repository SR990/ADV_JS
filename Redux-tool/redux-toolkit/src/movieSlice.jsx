import { createSlice } from "@reduxjs/toolkit";

const movieSlices = createSlice({
  name: 'movie',
  initialState: {
    movies: [
      { id: 1, name: "salaar" },
      { id: 2, name: "OG" },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      const movie = {
        id: state.movies[state.movies.length - 1] + 1,
        name: action.payload,
      };
      state.movies.push(movie);
    },

    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlices.actions;
export default movieSlices.reducer;
