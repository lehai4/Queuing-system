import axios from "axios";
import {
  logOutFailure,
  logOutStart,
  logOutSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  signInFailure,
  signInStart,
  signInSuccess,
} from "./authSlice";
import { getUsersFailure, getUsersStart, getUsersSuccess } from "./userSlice";
export const signInUser = async (user: any, dispatch: any, navigate: any) => {
  dispatch(signInStart());
  try {
    const res: any = await axios.post(
      `http://localhost:3001/v1/auth/signIn`,
      user
    );
    dispatch(signInSuccess(res.data));
    navigate("/dashboard");
  } catch (e) {
    dispatch(signInFailure());
  }
};
export const registerUser = async (user: any, dispatch: any, navigate: any) => {
  dispatch(registerStart());
  try {
    await axios.post(`http://localhost:3001/v1/auth/register`, user);
    dispatch(registerSuccess());
    navigate("/auth");
  } catch (e) {
    dispatch(registerFailure());
  }
};
export const getAllUsers = async (accesccToken: any, dispatch: any) => {
  dispatch(getUsersStart());
  try {
    const res: any = await axios.get(`http://localhost:3001/v1/user`, {
      headers: { token: `Bearer ${accesccToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (e) {
    dispatch(getUsersFailure());
  }
};
export const logOut = async (
  dispatch: any,
  id: any,
  navigate: any,
  accesccToken: string,
  axiosJWT: any
) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post(`http://localhost:3001/v1/auth/logout`, id, {
      headers: { token: `Bearer: ${accesccToken}` },
    });
    dispatch(logOutSuccess());
    navigate("/auth");
  } catch (e) {
    dispatch(logOutFailure());
  }
};
