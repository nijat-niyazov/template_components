import { createSlice } from '@reduxjs/toolkit';
import { orderTort, reStockTort } from './tortSlice';

const initialState = {
  marojna: 15,
};

const marojnaSlice = createSlice({
  name: 'marojna',
  initialState,
  reducers: {
    orderMarojna: state => {
      state.marojna--;
    },
    reStockMarojna: (state, { payload }) => {
      console.log(payload);
      state.marojna += payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(orderTort, state => {
        // when it dispatch, change state
        // when tort ordered automaticly ordered add 1 marjona
        state.marojna++;
      })
      .addCase(reStockTort, (state, action) => {
        // when it dispatch, change state
        // when tort restocked automaticly add restocked num tort to marojna
        state.marojna += action.payload;
      });
  },
});

export const { orderMarojna, reStockMarojna } = marojnaSlice.actions;

export default marojnaSlice.reducer;
