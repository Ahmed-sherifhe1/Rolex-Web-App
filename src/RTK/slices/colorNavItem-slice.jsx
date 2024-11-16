import { createSlice } from "@reduxjs/toolkit";

let colorNavItem = createSlice({
  name: "colorNavItem",
  initialState: {
    changeColor: localStorage.getItem("colorNavItem") | "home",
  },
  reducers: {
    changeNav: (state, action) => {
      return action.payload;
    },
  },
});
export const { changeNav } = colorNavItem.actions;
export default colorNavItem.reducer;
