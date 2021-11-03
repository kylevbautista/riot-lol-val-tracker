import * as types from "./actionTypes";
import * as summonerApi from "../../api/summonerApi";

// actions creators
export function loadSummonerNameSucces(sumData) {
  return { type: types.LOAD_SUMMONER_SUCCESS, sumData: sumData };
}

// thunks
export function loadSummonerName(name) {
  return function (dispatch) {
    summonerApi.byName
      .then((data) => {
        dispatch(loadSummonerNameSucces(data));
      })
      .catch((err) => {
        throw err;
      });
  };
}
