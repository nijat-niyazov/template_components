import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchingUsers = createAsyncThunk(
  'users/fetchingUsers',
  async () => {
    try {
      const { data } = await axios.get(USERS_URL);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
);

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchingUsers.fulfilled, (state, action) => {
      return action.payload;
      // it over writes state.users
    });
  },
});

export const selectAllUsers = state => state.usersSlice;
// because we want it when it change automatically change in component also

export default usersSlice.reducer;
