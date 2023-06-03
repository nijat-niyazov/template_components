import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
};

export const comparerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectIds: (state, { payload }) => {
      state.ids = [...state.ids, payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectIds } = comparerSlice.actions;

export const idds = state => state.comparer.ids;

export default comparerSlice.reducer;
