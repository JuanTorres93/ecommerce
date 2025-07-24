// DOC redux create slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  createdAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createuser: {
      prepare: (username) => {
        return {
          payload: {
            username,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer: (state, action) => {
        state.username = action.payload.username;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});

export const { createuser } = userSlice.actions;

// Selectors
// by convention, selectors should be named getSomething
export const getUsername = (state) => state.user.username;

export default userSlice.reducer;
