

import {createSlice} from '@reduxjs/toolkit';
import {ProductsProps} from '../@types/redux/store';

const initialState: ProductsProps = {
  products: [],
};

const slice = createSlice({
  name: 'productsReducer',
  initialState: initialState,
  reducers: {
    setAllProducts: (state = initialState, action) => {
      state.products = action.payload 
    },
  },
});

export default slice.reducer;

export const {
  setAllProducts,
} = slice.actions;