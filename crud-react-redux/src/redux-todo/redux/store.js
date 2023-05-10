import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/mainSlice';

export const store = configureStore({
  reducer: { todo: todoSlice },
});
