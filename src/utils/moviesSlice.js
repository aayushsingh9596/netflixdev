import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    BannerTrailor: {},
    NowPlaying: {},
    Popular: {},
    TopRated: {},
    Upcoming: {},
  },
  reducers: {
    addBannerTrailor: (state, action) => {
      state.BannerTrailor = action.payload;
    },
    addNowPlaying: (state, action) => {
      state.NowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.Upcoming = action.payload;
    },
  },
});

export const {
  addBannerTrailor,
  addNowPlaying,
  addPopular,
  addTopRated,
  addUpcoming,
} = moviesSlice.actions;
export default moviesSlice.reducer;
