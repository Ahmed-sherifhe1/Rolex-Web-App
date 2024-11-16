import { createSlice } from "@reduxjs/toolkit";

let accounSlice = createSlice({
  initialState: [],
  name: "accountSlice",
  reducers: {
    addAcount: (state, action) => {
      state.push(action.payload);
    },
    clearAcount: () => {
      return [];
    },
  },
});

export let { addAcount, clearAcount } = accounSlice.actions;
export default accounSlice.reducer;
