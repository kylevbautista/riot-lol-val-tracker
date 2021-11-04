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

export function loadsummonerRankInfoSuccess(rankInfo) {
  return { type: types.LOAD_SUMMONER_RANK_SUCCESS, rankInfo: rankInfo };
}

// thunks
export function loadSummonerName(name) {
  return function (dispatch) {
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
