import { createStore, applyMiddleware } from "redux";
// since rootReducer's file is index.js no need to specify file, implied
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// initialState is so we can initialize our store with some
// data when we create it
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
