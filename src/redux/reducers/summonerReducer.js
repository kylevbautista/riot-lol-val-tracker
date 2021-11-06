import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function summonerReducer(state = initialState.summoner, action) {
  switch (action.type) {
    case types.LOAD_SUMMONER_SUCCESS:
      return { ...state, data: action.sumData };
    case types.LOAD_MATCH_LIST_SUCCESS:
      return { ...state, matchIds: action.matchIds };
    case types.API_CALL_ERROR:
      return { ...state, error: true };
    case types.LOAD_SUMMONER_RANK_SUCCESS:
      return { ...state, rankInfo: action.rankInfo };
    case types.LOAD_LOL_LEADERBOARDS_SUCCESS:
      return { ...state, leaderBoards: action.lolBoard };
    case types.USER_LOGOUT:
      return initialState.summoner;
    default:
      return state;
  }
}
