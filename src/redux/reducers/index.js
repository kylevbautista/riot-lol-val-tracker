/**
 * root reducer. combines all reducers
 */
import { combineReducers } from "redux";
import summonerReducer from "./summonerReducer";
import apiStatusReducer from "./apiStatusReducer";
import valorantReducer from "./valorantReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  // reducing/combining all states into one root state
  summoner: summonerReducer,
  valorant: valorantReducer,
  apiCallsInProgress: apiStatusReducer,
  isLoggedIn: userReducer,
});

export default rootReducer;
