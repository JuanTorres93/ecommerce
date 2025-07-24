// DOC redux create slice
import { createSlice } from "@reduxjs/toolkit";

export const validCoupons = ["DISCOUNT100", "SAVE50"]; // In a real app, this would be fetched from a server or database

const initialState = {
  cart: [
    // An item in the cart is an object with the following properties:
    // {
    //   itemId
    //   name,
    //   img,
    //   quantity,
    //   unitPrice
    // }
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action.payload is an item as described above in initialState

      // Check if the item already exists in the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item.itemId === action.payload.itemId
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update the quantity
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.cart.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      // action.payload is the itemId of the item to be removed

      // Remove the item from the cart by filtering it out
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },

    increaseQuantity: (state, action) => {
      // action.payload is the itemId of the item whose quantity is to be increased
      const item = state.cart.find((item) => item.itemId === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      // action.payload is the itemId of the item whose quantity is to be decreased

      const item = state.cart.find((item) => item.itemId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // If quantity is 1, remove the item from the cart
        cartSlice.caseReducers.removeItem(state, action);
      }
    },

    clearCart: (state) => {
      // Clear the cart by resetting it to an empty array
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

// Selectors
// by convention, selectors should be named getSomething
export const getCart = (state) => state.cart.cart;
export const getCartItemById = (itemId) => (state) => {
  return state.cart.cart.find((item) => item.itemId === itemId);
};
export const getTotalItems = (state) => {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
};
export const getTotalPrice = (state) => {
  return state.cart.cart.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );
};

export default cartSlice.reducer;
