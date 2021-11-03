import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function summonerReducer(state = initialState.sumData, action) {
  switch (action.type) {
    case types.LOAD_SUMMONER_SUCCESS:
      return action.sumData;
    default:
      return state;
  }
}
