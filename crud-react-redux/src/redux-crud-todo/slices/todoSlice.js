import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mainApi } from '../api/api';

export const fetchItems = createAsyncThunk(
  'todo/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await mainApi.get('todos');
      return data;
    } catch (err) {
      return rejectWithValue('Something went wrong');
    }
  }
);

export const addNewItem = createAsyncThunk(
  'todo/addNewItem',
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await mainApi.post('todos/', item);
      return data;
    } catch (err) {
      return rejectWithValue('Please try again');
    }
  }
);

export const removeItem = createAsyncThunk(
  'todo/removeItem',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      await mainApi.delete('todos/' + id);
    } catch (err) {
      return rejectWithValue("We didn't find that post");
    }
  }
);

export const updateItem = createAsyncThunk(
  'todo/updateItem',
  async ({ id, post }, { rejectWithValue }) => {
    try {
      const { data } = await mainApi.patch('todos/' + id, post);
      return data;
    } catch (err) {
      return rejectWithValue("We couldn't update item");
    }
  }
);

export const findItem = createAsyncThunk(
  'todo/findItem',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await mainApi.get('todos/?q=' + query);
      console.log(data);
      return data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  item: '',
  list: [],
  modal: { opened: false },
  isLoading: null,
  error: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      console.log(payload);
      state.modal = payload;
    },
    closeModal: state => {
      state.modal = { opened: false };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchItems.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(fetchItems.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
      builder.addCase(addNewItem.fulfilled, (state, { payload }) => {
        state.list = [...state.list, payload];
      }),
      builder.addCase(removeItem.fulfilled, (state, action) => {
        state.list = state.list.filter(item => item.id !== action.meta.arg);
      }),
      builder.addCase(updateItem.fulfilled, (state, { payload }) => {
        const changedItemIndex = state.list.findIndex(
          item => item.id === payload.id
        );
        state.list.splice(changedItemIndex, 1, payload);
        state.modal = { opened: false };
      }),
      builder.addCase(findItem.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.list = payload;
      });
  },
});

export const { openModal, closeModal } = todoSlice.actions;

export const list = state => state.todo.list;
export const isLoading = state => state.todo.isLoading;
export const edited = state => state.todo.edited;
export const modal = state => state.todo.modal;
export const error = state => state.todo.error;

export default todoSlice.reducer;
