import { createStore, applyMiddleware, compose } from "redux";
// since rootReducer's file is index.js no need to specify file, implied
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// initialState is so we can initialize our store with some
// data when we create it
export default function configureStore(initialState) {
  // add support for redux dev tools
  const composeEhancers = compose;

  return createStore(
    rootReducer,
    initialState,
    composeEhancers(applyMiddleware(thunk))
  );
}
