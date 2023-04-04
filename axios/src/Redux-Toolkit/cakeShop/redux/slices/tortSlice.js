import { createSlice } from '@reduxjs/toolkit';
import { reStockMarojna } from './marojnaSlice';

const initialState = {
  tort: 20,
};

const tortSlice = createSlice({
  name: 'tort',
  initialState,
  reducers: {
    orderTort: state => {
      state.tort--;
    },
    reStockTort: (state, action) => {
      state.tort += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(reStockMarojna, (state, { payload }) => {
      // ancaq topdan alanda o eded qeder tort artir
      state.tort += payload;
    });
  },
});

export const { orderTort, reStockTort } = tortSlice.actions;

export default tortSlice.reducer;
