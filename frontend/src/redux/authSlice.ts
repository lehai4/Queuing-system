import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    logOut: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    // Login
    signInStart: (state) => {
      state.login.isFetching = true;
    },
    signInSuccess: (state, action: PayloadAction<any>) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    signInFailure: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    // register
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailure: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    // logout
    logOutStart: (state) => {
      state.logOut.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.logOut.isFetching = true;
      state.login.currentUser = null;
      state.logOut.error = false;
    },
    logOutFailure: (state) => {
      state.logOut.isFetching = false;
      state.logOut.error = true;
    },
  },
});
export const {
  signInStart,
  signInSuccess,
  signInFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
} = authSlice.actions;
export default authSlice.reducer;
