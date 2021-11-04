/**
 * root reducer. combines all reducers
 */
import { combineReducers } from "redux";
import summonerReducer from "./summonerReducer";
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  // reducing/combining all states into one root state
  summoner: summonerReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
