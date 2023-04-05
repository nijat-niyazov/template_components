import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  items: [],
  amountOfItems: 4,
  totalPrice: 0,
  isLoading: true,
  error: { exist: false, message: '' },
};

// #1 Promise Way
// export const getCartItems = createAsyncThunk('test/gettingCartItems', () => {
//   return fetch(url)
//     .then(res => res.json())
//     .catch(e => console.log(e));
// });

// #2 Asyncyronus
export const getCartItems = createAsyncThunk(
  'test/gettingCartItems',
  async (name, thunkAPI) => {
    try {
      // console.log(thunkAPI.getState());
      // it returns all state that has been used in app of store.js

      // thunkAPI.dispatch(openModal());
      // with dispatch method we can get action of even slice that is not current because thunkAPI lets us to access all slices

      const { data } = await axios(url);
      // console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('something went wrong');
      // throw new errror ⤴ and its value will be shown as payload on rejected extrareducer
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      // #1
      state.items = [];
      state.amountOfItems = 0;

      // #2
      // return { ...state, amountOfItems: 0, items: [] };
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    toggleAmount: (state, { payload }) => {
      let { type, id } = payload;

      const itemIncresed = state.items.find(item => item.id === id);
      if (itemIncresed) {
        itemIncresed.amount =
          itemIncresed.amount + (type === 'increase' ? 1 : -1);
      }
      return;
    },

    allTotalStuffs: state => {
      let numberOfItems = 0;
      let priceOfAllItems = 0;
      state.items?.forEach(item => (numberOfItems += item.amount));
      state.items?.forEach(
        item => (priceOfAllItems += item.amount * item.price)
      );
      state.amountOfItems = numberOfItems;
      state.totalPrice = priceOfAllItems;
    },
  },

  // for async thunk reducers ⤵
  extraReducers: builder => {
    builder
      .addCase(getCartItems.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, { payload, type }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.error.exist = true;
        state.error.message = action.payload;
      });
  },

  // // #2 way of extraReducers
  // {
  //   [getCartItems.pending]: state => {
  //     // while loads
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     // if we have fullfilled promise
  //     // console.log(action);
  //     // type is the name of action and method for example here is fullfilled, payload will be fetched data
  //     state.isLoading = false;
  //     state.items = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     // console.log(action.payload);
  //     //it will be eqaul to in catch (e) return thunkAPI.rejectValue(value)

  //     // if promise is rejected
  //     state.isLoading = false;
  //   },
  //   [getCartItems.pending]: state => {
  //     // while loads
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     // if we have fullfilled promise
  //     // console.log(action);
  //     // type is the name of action and method for example here is fullfilled, payload will be fetched data
  //     state.isLoading = false;
  //     state.items = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     // console.log(action.payload);
  //     //it will be eqaul to in catch (e) return thunkAPI.rejectValue(value)

  //     // if promise is rejected
  //     state.isLoading = false;
  //   },
  // },
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggleAmount, allTotalStuffs } =
  cartSlice.actions;
// it is our actions that we mutate states ⤴

export default cartSlice.reducer;
// this reducer controll all states in slice that why we export it into store js
