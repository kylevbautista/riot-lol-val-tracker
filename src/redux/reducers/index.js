/**
 * root reducer. combines all reducers
 */
import { combineReducers } from "redux";
import summonerReducer from "./summonerReducer";

const rootReducer = combineReducers({
  // reducing/combining all states into one root state
  summoner: summonerReducer,
});

export default rootReducer;
