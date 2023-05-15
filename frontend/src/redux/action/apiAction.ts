import * as types from "./actionType";
import * as authApi from "../../api/authApi";

export function beginApiCall() {
  return { type: types.BEGIN_CALL_API };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}

export function apiCallSuccess() {
  return { type: types.API_CALL_SUCCESS };
}
