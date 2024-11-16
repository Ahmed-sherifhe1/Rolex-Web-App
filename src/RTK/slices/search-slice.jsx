import { createSlice } from "@reduxjs/toolkit";
let searchSlice = createSlice({
  initialState: "",
  name: "searchSlice",
  reducers: {
    setSearch: (state, action) => {
      return action.payload;
    },
  },
});

export let { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
