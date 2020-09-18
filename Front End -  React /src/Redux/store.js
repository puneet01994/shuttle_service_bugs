import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const initialState = {};

export const middleware = [thunk];
export const jwtToken = sessionStorage.getItem("accessToken");
export const refreshJwtToken = sessionStorage.getItem("refreshToken");

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
  initialState
);

export default store;
