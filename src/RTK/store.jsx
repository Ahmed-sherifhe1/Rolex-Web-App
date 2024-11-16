import { configureStore } from "@reduxjs/toolkit";
import darkModeTheme from "./slices/darkMode-slice";
import myProducts from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import acountSlice from "./slices/account-slice";
import scroll from "./slices/scrolll-horizontal-section-slice";
import colorNavItem from "./slices/colorNavItem-slice";
import userSlice from "./slices/user-slice";
import cartIsHere from "./slices/cart--visible-slice";
import search from "./slices/search-slice";
export let Store = configureStore({
  reducer: {
    theme: darkModeTheme,
    products: myProducts,
    cart: cartSlice,
    acount: acountSlice,
    scrollHorizontal: scroll,
    colorNav: colorNavItem,
    user: userSlice,
    cartIsHere,
    search: search,
  },
});
