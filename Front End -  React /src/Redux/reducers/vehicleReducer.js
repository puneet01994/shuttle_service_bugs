import { types } from "../types";

const initialState = {
  Vehicle_info: [],
  Vehicle_route: [],
  Vehicle_status: [],
  // totalPages=""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VEHICLE_INFO:
      return {
        Vehicle_info: action.payload,
        vehicleInfoTotalpages: action.payload1,
        VehicleInfoAllResult: action.payload2,
        error:""
      };
    case types.GET_VEHICLE_PROFILE:
      return {
        vehicleProfile: action.payload.id,
        vehicleProfileTotalpages: action.payload1,
        error:""
      };
    case types.GET_VEH_ROUTES:
      return {
        ...state,
        Vehicle_route: action.payload,
        vehRoutesTotalPages: action.payload1,
        error:""
      };

    case types.CHANGE_VEHICLE_NO:
      let vehRoute = [...state.Vehicle_routes];
      vehRoute = vehRoute.map((item, index) => {
        if (item.vehicleNumber === action.payload) {
          item.vehicleNumber = action.payload1;
          return item;
        }
        return item;
      });

      return {
        ...state,
        Vehicle_route: vehRoute,
      };

    case types.DELETE_VEHICLE_ROUTE_INFO:
      var deleteIndexV;
      state.Vehicle_route.filter((index, i) => {
        if (index.id === action.payload) {
          return (deleteIndexV = i);
        } else return 0;
      });

      var resultV = state.Vehicle_route.filter((index, i) => {
        return i !== deleteIndexV;
      });

      return {
        ...state,
        Vehicle_route: resultV,
        error:""
      };
    case types.DELETE_VEHICLE_INFO:
      var deleteIndexI;
      state.Vehicle_info.filter((index, i) => {
        if (index.vehicleNumber === action.payload) {
          return (deleteIndexI = i);
        } else return 0;
      });

      var resultI = state.Vehicle_info.filter((index, i) => {
        return i !== deleteIndexI;
      });

      return {
        ...state,
        Vehicle_info: resultI,
        error:""
      };

    case types.GET_STATUS_BY_DATE:
      return {
        ...state,
        Vehicle_status: action.payload,
        totalPages: action.payload1,
        error:""
      };

    case types.POST_VEHICLE_ROUTE_INFO:
      return {
        ...state,
        Vehicle_route: [...state.Vehicle_route, action.payload],
      };

    case types.POST_VEHICLE_INFO:
      return {
        ...state,
        Vehicle_info: [...state.Vehicle_info, action.payload],
      };
      case types.ERROR:
        return {
          error: action.payload,
        };

    default:
      return state;
  }
};
