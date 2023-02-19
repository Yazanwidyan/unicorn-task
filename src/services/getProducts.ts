import { Api } from "./api";

export const getProducsApi = (limit:number) => {
  return Api().get(`/products?limit=${limit}`);
};
