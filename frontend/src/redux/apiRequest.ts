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
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./userSlice";
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
export const uploadImage = async (id: any, data: any) => {
  try {
    await axios({
      method: "PUT",
      url: `http://localhost:3001/v1/user/update/${id}`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("error", err);
  }
};
export const getUserById = async (id: any, dispatch: any, accessToken: any) => {
  try {
    const user: any = await axios({
      method: "GET",
      url: `http://localhost:3001/v1/user/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(signInSuccess({ user: user.data, accessToken: accessToken }));
  } catch (err) {
    console.error("error", err);
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
export const getAllUsers = async (accesssToken: string, dispatch: any) => {
  dispatch(getUsersStart());
  try {
    const res: any = await axios.get(`http://localhost:3001/v1/user`, {
      headers: { token: `Bearer ${accesssToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (e) {
    dispatch(getUsersFailure());
  }
};
export const logOut = async (
  dispatch: any,
  navigate: any,
  accesccToken: string
) => {
  dispatch(logOutStart());
  try {
    await axios.post(`http://localhost:3001/v1/auth/logout`, {
      headers: { token: `Bearer ${accesccToken}` },
    });
    dispatch(logOutSuccess());
    navigate("/auth");
  } catch (e) {
    dispatch(logOutFailure());
  }
};

export const deleteUser = async (
  accesssToken: string,
  dispatch: any,
  id: string,
  axiosJWT: any
) => {
  dispatch(deleteUserStart());
  try {
    const res: any = await axiosJWT.delete(
      `http://localhost:3001/v1/user/${id}`,
      {
        headers: { token: `Bearer ${accesssToken}` },
      }
    );
    dispatch(deleteUserSuccess(res.data));
  } catch (err: any) {
    dispatch(deleteUserFailure("Delete Failed"));
  }
};
