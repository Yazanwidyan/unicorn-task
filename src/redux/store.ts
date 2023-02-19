import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./loading.reducer";
import productsReducer from "./products.reducer";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  loadingReducer,
  productsReducer
});

const persistedReducer = persistReducer(
  {
    key: "ecommerce-app",
    storage,
  },
  reducers
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
