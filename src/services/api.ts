import axios from "axios";
import { showLoading } from "../redux/loading.reducer";
import { store } from "../redux/store";
export const Api = () => {
  const apiCreate = axios.create({
    baseURL: "https://fakestoreapi.com",
  });

  apiCreate.interceptors.request.use((config) => {
    return config;
  });

  apiCreate.interceptors.response.use(
    (response) => {
      store.dispatch(showLoading(false));
      return response;
    },
    (error) => {
      let message = "";
      if (error.response) {
        message = error.response;
        if (error.response.status === 400) {
          message = error.response;
        }
        if (error.response.status === 422) {
          message = error.response.data.message;
        }
        if (error.response.status === 404) {
          message = "NotFound";
        }
      }
      store.dispatch(showLoading(false));
      return message;
    }
  );
  return apiCreate;
};
