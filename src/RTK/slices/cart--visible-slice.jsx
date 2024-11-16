import { createSlice } from "@reduxjs/toolkit";

let CartVisibleSlice = createSlice({
  initialState: false,
  name: "CartVisibleSlice",
  reducers: {
    ShowCart: () => {
      return true;
    },
  },
});

export let { ShowCart } = CartVisibleSlice.actions;
export default CartVisibleSlice.reducer;
