import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UsersProp, User } from "../typeProps";

const users: UsersProp = {
  allUsers: null,
  isFetching: false,
  error: false,
  message: "",
};
type initialStateType = {
  users: UsersProp;
  passwordChange: User | undefined;
};

const initialState: initialStateType = {
  users,
  passwordChange: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users.isFetching = true;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUsersFailure: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    deleteUserStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUserSuccess: (state, action) => {
      state.users.isFetching = true;
      state.users.message = action.payload;
      state.users.error = false;
    },
    deleteUserFailure: (state, action) => {
      state.users.isFetching = false;
      state.users.message = action.payload;
      state.users.error = true;
    },
    //
    changeConfirmPassword: (state, action: PayloadAction<User | undefined>) => {
      state.passwordChange = action.payload;
    },
  },
});
export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  changeConfirmPassword,
} = userSlice.actions;
export default userSlice.reducer;
