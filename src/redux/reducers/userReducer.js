import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.isLoggedIn, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.loginStatus;
    case types.LOGOUT_SUCCESS:
      return action.loginStatus;
    default:
      return state;
  }
}
