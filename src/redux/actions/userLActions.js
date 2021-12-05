import * as types from "./actionTypes";
import { loginUser } from "../../api/auth/loginApi";

// action creators
export function loginSuccess(data) {
  localStorage.setItem("token", data.token);
  return { type: types.LOGIN_SUCCESS, loginStatus: true };
}
export function logoutSucces() {
  localStorage.removeItem("token");
  return { type: types.LOGOUT_SUCCESS, loginStatus: false };
}

// thunks
// only need thunk for login since login handles api call
export function login(info) {
  return (dispatch) => {
    loginUser(info)
      .then((data) => {
        dispatch(loginSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
