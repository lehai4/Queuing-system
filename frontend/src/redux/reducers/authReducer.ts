import * as types from "../action/actionType";
import { initialStateType } from "./initialState";
type actionProps = {
  type: string;
  payload: any;
};
type reducerProps = {
  state: initialStateType;
  action: actionProps;
};
const authReducer = ({ state, action }: reducerProps) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          currentUser: action.payload,
          error: false,
        },
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          error: true,
        },
      };
    default:
      return state;
  }
};
export default authReducer;
