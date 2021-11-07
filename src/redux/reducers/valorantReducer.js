import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function valorantReducer(state = initialState.valorant, action) {
  switch (action.type) {
    case types.LOAD_VAL_CONTENT_SUCCESS:
      return { ...state, content: action.content };
    case types.LOAD_VAL_LEADERBOARDS_SUCCESS:
      return { ...state, leaderBoards: action.leaderBoards };
    case types.API_CALL_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
