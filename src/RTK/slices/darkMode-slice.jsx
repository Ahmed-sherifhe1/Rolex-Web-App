import { createSlice } from "@reduxjs/toolkit";

let themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    isDarkMode: localStorage.getItem("teageeayme") === "true", // Directly convert to boolean
  },
  reducers: {
    isDarkModeOn: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("teageeayme", state.isDarkMode.toString());
    },
  },
});

export let { isDarkModeOn } = themeSlice.actions;
export default themeSlice.reducer;
