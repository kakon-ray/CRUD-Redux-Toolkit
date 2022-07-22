import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Products/ProductsSlice";

const store = configureStore({
  reducer: {
    productReducer: productReducer,
  },
});

export default store;
