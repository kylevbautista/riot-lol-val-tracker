import * as types from "./actionTypes";
import * as valorantApi from "../../api/valorantApi";
import { beginApiCall } from "./apiStatusAction";

export function loadContentSuccess(content) {
  return { type: types.LOAD_VAL_CONTENT_SUCCESS, content: content };
}

export function loadValorantLeaderBoardSuccess(data) {
  return { type: types.LOAD_VAL_LEADERBOARDS_SUCCESS, leaderBoards: data };
}

export function valorantApiError() {
  return { type: types.VAL_API_CALL_ERROR };
}

export function loadContent() {
  return function (dispatch) {
    dispatch(beginApiCall());
    valorantApi
      .getContent()
      .then((data) => {
        dispatch(loadContentSuccess(data));
      })
      .catch((err) => {
        dispatch(valorantApiError());
        console.log("loadContent failed");
      });
  };
}
export function loadLeaderBoard(actid) {
  return function (dispatch) {
    dispatch(beginApiCall());
    valorantApi
      .getLeaderBoards(actid)
      .then((data) => {
        dispatch(loadValorantLeaderBoardSuccess(data));
      })
      .catch((err) => {
        dispatch(valorantApiError());
        console.log("loadLeaderBaord VAL fail");
      });
  };
}
