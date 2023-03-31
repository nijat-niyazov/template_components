import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
  users: [],
  isLoading: false,
  error: { exist: false, message: '' },
};

export const fetchUser = createAsyncThunk(
  'fetching/users',
  async (_, thunkAPI) => {
    try {
      // console.log(thunkAPI.getState()); // values of all slices 
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('It seems you got sometrhing wrong');
    }
  }
);

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = { exist: true, message: action.payload };
      });
  },
});

export default customersSlice.reducer;
