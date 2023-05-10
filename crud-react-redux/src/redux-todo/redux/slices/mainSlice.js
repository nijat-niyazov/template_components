import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: '',
  list: [],
  modal: { opened: false },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.list = [...state.list, payload];
      state.item = '';
    },
    changeItem: (state, { payload }) => {
      state.item = payload;
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter(item => item.id !== payload);
    },
    openModal: (state, { payload }) => {
      console.log(payload);
      state.modal = payload;
    },
    closeModal: state => {
      state.modal = { opened: false };
    },

    updateItem: (state, { payload }) => {
      state.list = state.list.map(act =>
        act.id === payload.id ? { ...act, item: payload.item } : act
      );
      state.modal = { opened: false };
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  openModal,
  closeModal,
  changeItem,
} = counterSlice.actions;

export const list = state => state.todo.list;
export const edited = state => state.todo.edited;
export const modal = state => state.todo.modal;

export default counterSlice.reducer;
