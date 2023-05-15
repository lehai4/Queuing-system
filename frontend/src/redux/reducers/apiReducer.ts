import initialState from "./initialState";
import * as types from "../action/actionType";
function actionTypeEndsInSuccess(type: string) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.apiCallInProgress,
  action: any
) {
  if (action.type == types.BEGIN_CALL_API) {
    return state + 1;
  } else if (
    action.type == types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state > 0 ? state - 1 : state;
  } else {
    return state;
  }
}
