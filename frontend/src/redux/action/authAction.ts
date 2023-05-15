import * as authApi from "../../api/authApi";
import { apiCallError, beginApiCall } from "./apiAction";
import * as type from "./actionType";
export function LoginSuccess(user: any) {
  return { types: type.LOGIN_SUCCESS, payload: user };
}
export function LoginError() {
  return { types: type.LOGIN_ERROR };
}

export function Login(user: any) {
  return function (dispatch: any) {
    dispatch(beginApiCall());
    return authApi
      .LoginApi(user)
      .then((res) => {
        dispatch(LoginSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(LoginError());
        dispatch(apiCallError());
      });
  };
}
