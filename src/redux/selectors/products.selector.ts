import { StoreProps } from "../../@types/redux/store";

export const getAllProducts = (state: StoreProps) =>
  state.productsReducer.products;
