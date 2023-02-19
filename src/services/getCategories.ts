import { Api } from "./api";

export const getCategoriesApi = () => {
  return Api().get(`/products/categories`);
};

export const getByCategoryApi = (category:string) => {
  return Api().get(`/products/category/${category}?limit=6`);
};
