import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postsSlice';
import usersReducer from './slice/usersSlice';

export const store = configureStore({
  reducer: {
    postsSlice: postsReducer,
    usersSlice: usersReducer,
  },
});
