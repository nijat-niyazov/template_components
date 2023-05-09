import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  modalOpened: false,
  edited: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.list = [...state.list, payload];
      state.item = '';
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter(item => item.id !== payload);
    },
    openModal: (state, { payload }) => {
      console.log(payload);
      state.modalOpened = true;
      state.edited = payload;
    },
    closeModal: state => {
      state.modalOpened = false;
    },

    updateItem: (state, { payload }) => {
      state.list = state.list.map(act =>
        act.id === payload.id ? { ...act, item: payload.item } : act
      );
      state.modalOpened = false;
    },
  },
});

export const { addItem, removeItem, updateItem, openModal, closeModal } =
  counterSlice.actions;

export const list = state => state.todo.list;
export const edited = state => state.todo.edited;
export const modalOpened = state => state.todo.modalOpened;

export default counterSlice.reducer;
