import { createSlice } from '@reduxjs/toolkit';
import { orderTort, reStockTort } from './tortSlice';

const initialState = {
  chay: 30,
};

const chaySlice = createSlice({
  name: 'chay',
  initialState,
  reducers: {
    orderChay: state => {
      state.chay--;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(orderTort, state => {
        // when it dispatch, change state
        // when tort ordered automaticly ordered 2 cup of tea
        console.log(state.chay);
        if (state.chay <= 2) {
          state.chay = 0;
        } else {
          state.chay -= 2;
        }
      })
      .addCase(reStockTort, (state, action) => {
        // when it dispatch, change state
        // when tort restocked automaticly add 2 times more than restocked tort to cup of tea
        state.chay += action.payload * 2;
      });
  },
});

export const { orderChay } = chaySlice.actions;

export default chaySlice.reducer;
