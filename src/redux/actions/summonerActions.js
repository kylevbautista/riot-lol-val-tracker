import * as types from "./actionTypes";
import * as summonerApi from "../../api/summonerApi";
import { beginApiCall } from "./apiStatusAction";

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

export function loadsummonerRankInfoSuccess(rankInfo) {
  return { type: types.LOAD_SUMMONER_RANK_SUCCESS, rankInfo: rankInfo };
}

export function loadSummonerMatchInfoSuccess() {
  return { type: types.LOAD_SUMMONER_MATCH_INFO_SUCCESS };
}

export function userLogout() {
  return { type: types.USER_LOGOUT };
}

// thunks
export function loadSummonerName(name) {
  return function (dispatch) {
    dispatch(beginApiCall());
    summonerApi
      .byName(name)
      .then((data) => {
        dispatch(loadSummonerNameSucces(data));
        dispatch(loadsummonerRankInfo(data.id));
      })
      .catch((err) => {
        //throw err;
        console.log("loadSummonerName Fail");
        dispatch(summonerApiError());
      });
  };
}

export function loadSummonerMatchIds(puuid) {
  return function (dispatch) {
    dispatch(beginApiCall());
    summonerApi
      .getMatchIds(puuid)
      .then((data) => {
        dispatch(loadSummonerMatchListSuccess(data));
      })
      .catch((err) => {
        //throw err;
        console.log("loadSummonerMatchIds Fail");
        dispatch(summonerApiError());
      });
  };
}

export function loadsummonerRankInfo(encryptedId) {
  return function (dispatch) {
    dispatch(beginApiCall());
    summonerApi
      .getRank(encryptedId)
      .then((data) => {
        dispatch(loadsummonerRankInfoSuccess(data));
      })
      .catch((err) => {
        console.log("loadsummonerRankInfo Fail");
        dispatch(summonerApiError());
      });
  };
}
