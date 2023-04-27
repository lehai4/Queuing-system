import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action: PayloadAction<any>) => {
      state.users.isFetching = true;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUsersFailure: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    // register
  },
});
export const { getUsersStart, getUsersSuccess, getUsersFailure } =
  userSlice.actions;
export default userSlice.reducer;
