import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    deleteFromProducts: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    addToCart: (state, action) => {
      let product = state.find((pro) => pro.id == action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        let QuantityProduct = { ...action.payload, quantity: 1 };
        state.push(QuantityProduct);
      }
    },
    addToCartProductView: (state, action) => {
      let product = state.find((pro) => pro.id == action.payload.id);
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    delFromQuantity: (state, action) => {
      let product = state.find((pro) => pro.id == action.payload.id);
      product.quantity -= 1;
    },
    clearCart: () => {
      return [];
    },
  },
});

export let {
  getProducts,
  deleteFromProducts,
  addToCart,
  delFromQuantity,
  addToCartProductView,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
