import { ProductCardProps } from "../components";

export interface StoreProps {
  loadingReducer: LoadingProps;
  productsReducer: ProductsProps;
}
export interface LoadingProps {
  isLoading: boolean;
}

export interface ProductsProps {
  products: Array;
}
