import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/Redux/reducers/index";
import { middleware } from "../src/Redux/store";

import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);

  return wrapper;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);

export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state,
  });
};
