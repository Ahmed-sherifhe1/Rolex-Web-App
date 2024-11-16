import { createSlice } from "@reduxjs/toolkit";

let scrollHor = createSlice({
  initialState: [],
  name: "scrollHor",
  reducers: {
    addHeight: (state, action) => {
      state.push(action.payload);
    },
  },
});

export let { addHeight } = scrollHor.actions;
export default scrollHor.reducer;
