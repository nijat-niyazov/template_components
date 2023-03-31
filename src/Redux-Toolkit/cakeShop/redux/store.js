import { configureStore } from '@reduxjs/toolkit';
import chaySlice from './slices/chaySlice';
import tortSlice from './slices/tortSlice';
import customersSlice from './slices/userSlice';
import marojnaSlice from './slices/marojnaSlice';

export const store = configureStore({
  reducer: {
    customers: customersSlice,
    tort: tortSlice,
    chay: chaySlice,
    marojna: marojnaSlice,
  },
});
