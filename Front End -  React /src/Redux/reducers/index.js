import { combineReducers } from "redux";
import { types } from "../types";
import userReducer from "./userReducer";
import getReducer from "./getReducer";
import vehicleReducer from "./vehicleReducer";
import tripReducer from "./tripReducer";
import statusTableReducer from "./statusTableReducer";
import routeReducer from "./routeReducer";
import homePageCardReducer from "./homePageCardReducer";

export const appReducer = combineReducers({
  userReducer: userReducer,
  getReducer: getReducer,
  vehicleReducer: vehicleReducer,
  routeReducer: routeReducer,
  statusTableReducer: statusTableReducer,
  tripReducer: tripReducer,
  homePageCardReducer: homePageCardReducer,
});

export default (state, action) => {
  if (action.type === types.LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
