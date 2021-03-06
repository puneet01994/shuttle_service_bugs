import { types } from "../types";

const initialState = {
  riderid: {},
  driverid: {},
  employeeStatusid: {},
  routeid: {},
  adminContact: {},
  nightCabRequests: [],
  nightCabHistory: [],
  nightCabRequestsById: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.EDIT_NIGHT_CAB_BY_ID:
    return {
      ...state,
      nightCabRequestsById: action.payload,
    };
  case types.NIGHT_CAB_REQUESTS:
    return {
      ...state,
      nightCabRequests: action.payload,
    };

  case types.UPDATE_NIGHT_CAB_BY_ID:
    let nightcabreqbyid = [...state.nightCabRequests];
    nightcabreqbyid = nightcabreqbyid.map((item, index) => {
      if (item.employeeId === action.payload1) {
        item = action.payload;
        return item;
      }
      return item;
    });

    return {
      ...state,
      nightCabRequests: nightcabreqbyid,
    };

  case types.NIGHT_CAB_HISTORY:
    return {
      ...state,

      nightCabHistory: action.payload,
      totalPages: action.payload1,
      error: "",
    };

  case types.UPDATE_CONTACT_US:
  case types.GET_CONTACT_US:
    return {
      ...state,
      adminContact: action.payload,
    };

  case types.GET_RIDER_BY_ID:
    return {
      riderid: action.payload,
      error: "",
    };
  case types.GET_DRIVER_BY_ID:
    return {
      ...state,
      driverid: action.payload,
      error: "",
    };
  case types.GET_EMP_BY_ID:
    return {
      ...state,
      employeeStatusid: action.payload,
      error: "",
    };
  case types.GET_ROUTE_BY_ID:
    return {
      ...state,
      routeid: action.payload,
      error: "",
    };

  case types.CLEAR_TARGET:
    return {
      ...state,
      riderid: [],
      driverid: [],
      employeeStatusid: [],
      adminContact: [],
      routeid: [],
    };
  case types.ERROR:
    return {
      error: action.payload,
    };

  default:
    return state;
  }
};
