import { configureStore } from "@reduxjs/toolkit";

// Import reducers
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/Cart/cartSlice";
import orderReducer from "./features/order/orderSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
