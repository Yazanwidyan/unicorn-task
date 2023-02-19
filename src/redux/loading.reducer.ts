import { createSlice } from "@reduxjs/toolkit";
import { LoadingProps } from "../@types/redux/store";

const initialState: LoadingProps = {
  isLoading: false,
};

const slice = createSlice({
  name: "loadingReducer",
  initialState: initialState,
  reducers: {
    showLoading: (state = initialState, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default slice.reducer;

export const { showLoading } = slice.actions;
