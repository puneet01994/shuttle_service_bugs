import { types } from "../types";

const initialState = {
  TripsDetails: [],
};

export default (state = initialState, action) => {
  if (action.type === types.GET_TRIP_BY_DATE) {
    return {
      TripsDetails: action.payload,
      totalPages: action.payload1,
      error: "",
    };
  } else if (action.type === types.ERROR) {
    return {
      error: action.payload,
    };
  } else {
    return state;
  }
};
