import { userLogout } from "./summonerActions";

export function logout() {
  return function (dispatch) {
    dispatch(userLogout());
  };
}
