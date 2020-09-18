import { types } from "../types";

const initialState = {
  RouteInfo: [],
  locationArray: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.ERROR:
    return {
      error: action.payload
    };

  case types.POST_LOCATION:
    return {
      ...state,
      locationArray: [...state.locationArray, action.payload],
    };
  case types.GET_LOCATION:
    return {
      ...state,
      locationArray: action.payload,
      error: "",
    };
  case types.DELETE_LOCATION:
    var deleteIndexL;
    state.locationArray.filter((index, i) => {
      if (index.location === action.payload) {
        return (deleteIndexL = i);
      } else return 0;
    });

    var resultL = state.locationArray.filter((index, i) => {
      return i !== deleteIndexL;
    });

    return {
      ...state,
      locationArray: resultL,
      error: "",
    };

  case types.GET_ROUTE_INFO:
    return {
      ...state,
      RouteInfo: action.payload,
      routeTotalPages: action.payload1,
      RouteInfoAllResult: action.payload2,
      error: "",
    };

  case types.POST_ROUTE_INFO:
    return {
      ...state,
      RouteInfo: [...state.RouteInfo, action.payload],
    };

  case types.DELETE_ROUTE:
    var deleteIndexR;
    state.RouteInfo.filter((index, i) => {
      if (index.routeId === action.payload) {
        return (deleteIndexR = i);
      } else return 0;
    });

    var resultR = state.RouteInfo.filter((index, i) => {
      return i !== deleteIndexR;
    });

    return {
      ...state,
      RouteInfo: resultR,
      error: "",
    };

  case types.UPDATE_ROUTE:
    let routeinfo = [...state.RouteInfo];
    routeinfo = routeinfo.map((item, index) => {
      if (item.routeId === action.payload1) {
        item = action.payload;
        return item;
      }
      return item;
    });
    return {
      ...state,
      RouteInfo: routeinfo,
    };
  default:
    return state;
  }
};
