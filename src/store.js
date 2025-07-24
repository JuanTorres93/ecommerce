import { configureStore } from "@reduxjs/toolkit";

// Import reducers
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/Cart/cartSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
