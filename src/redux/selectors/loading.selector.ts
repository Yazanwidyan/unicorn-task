import { StoreProps } from "../../@types/redux/store";

export const getIsLoading = (state: StoreProps) =>
  state.loadingReducer.isLoading;
