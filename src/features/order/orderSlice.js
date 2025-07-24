// DOC redux create slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {
    // TODO get from localStorage
    // Example order structure
    // orderId: {
    //   id: orderId,
    //   totalDiscount: //number,
    //   createdAt: //timestamp,
    //   items: [
    //     {
    //       id: 1,
    //       name: "Pizza Margherita",
    //       quantity: 2,
    //       price: 8.99,
    //       img: "/images/users/user1.jpg",
    //     },
    //     {
    //       id: 2,
    //       name: "Pizza Pepperoni",
    //       quantity: 1,
    //       price: 9.99,
    //       img: "/images/users/user2.jpg",
    //     },
    //   ],
    // },
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: {
      reducer: (state, action) => {
        // action.payload should the actual order object
        state.orders[action.payload.id] = action.payload;
      },
    },
  },
});

export const { addOrder } = orderSlice.actions;

// Selectors
// by convention, selectors should be named getSomething
export const getOrders = (state) => state.order.orders;
export const getOrderById = (orderId) => (state) => {
  return state.order.orders[orderId] || null;
};

export default orderSlice.reducer;
