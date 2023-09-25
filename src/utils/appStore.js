import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import moviesSlice from './moviesSlice';
import playListSlice from './playListSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    movies:moviesSlice,
    playList:playListSlice,
  },
});

export default store;