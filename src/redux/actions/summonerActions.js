import * as types from "./actionTypes";
import * as summonerApi from "../../api/summonerApi";

// actions creators
export function loadSummonerNameSucces(sumData) {
  return { type: types.LOAD_SUMMONER_SUCCESS, sumData: sumData };
}

export function loadSummonerMatchListSuccess(matchIds) {
  return { type: types.LOAD_MATCH_LIST_SUCCESS, matchIds: matchIds };
}

export function summonerApiError() {
  return { type: types.API_CALL_ERROR };
}

// thunks
export function loadSummonerName(name) {
  return function (dispatch) {
    summonerApi
      .byName(name)
      .then((data) => {
        dispatch(loadSummonerNameSucces(data));
      })
      .catch((err) => {
        //throw err;
        dispatch(summonerApiError());
      });
  };
}

export function loadSummonerMatchIds(puuid) {
  return function (dispatch) {
    summonerApi
      .getMatchIds(puuid)
      .then((data) => {
        dispatch(loadSummonerMatchListSuccess(data));
      })
      .catch((err) => {
        //throw err;
        dispatch(summonerApiError());
      });
  };
}
