const { createSlice } = require("@reduxjs/toolkit");

const initialProduct = {
  product: [
    {
      id: 1,
      title: "Green Dress For Woman",
      desc: "This is very beautiful dress",
      img: "https://andshop-react.netlify.app/static/media/product6.f19b14e6.png",
    },
    {
      id: 2,
      title: "Dress For Woman",
      desc: "This is very beautiful dress",
      img: "https://andshop-react.netlify.app/static/media/product10.d71c44ec.png",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialProduct,
  reducers: {
    showProduct: (state) => state,
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { showProduct, addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
