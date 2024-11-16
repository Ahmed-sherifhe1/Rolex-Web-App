import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  initialState: {},
  name: "userSlice",
  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
  },
});

export let { setUserData } = userSlice.actions;
export default userSlice.reducer;
