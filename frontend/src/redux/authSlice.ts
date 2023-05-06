import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  PropLogin,
  PropRegister,
  PropLogOut,
  currentUserProps,
} from "../typeProps";
const login: PropLogin = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const register: PropRegister = {
  isFetching: false,
  error: false,
  success: false,
};
const logOut: PropLogOut = {
  isFetching: false,
  error: false,
};
type initialStateType = {
  login: PropLogin;
  register: PropRegister;
  logOut: PropLogOut;
};

const initialState: initialStateType = {
  login,
  register,
  logOut,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Login
    signInStart: (state) => {
      state.login.isFetching = true;
    },
    signInSuccess: (state, action: PayloadAction<currentUserProps>) => {
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
      state.login.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = false;
    },
    logOutFailure: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
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
