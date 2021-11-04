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
    default:
      return state;
  }
}
