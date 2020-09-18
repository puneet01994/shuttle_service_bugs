import axios from "axios";
import { types } from "../types";
import httpService from "../../Services/httpService";
import {
  getUserDetails,
  vehicleProfile,
  signupMail,
  getClientLocation,
  adminContact,
  nightCabRequest,
  nightCabRequestHistory,
  tripDetailsByDate,
  vehicleStatusByDate,
  homeStatusTable,
  homePageCards,
  riderAccountStatus,
  vehicleDetails,
  vehicleRouteDetails,
  routeDetails,
  riderByIdDetails,
  driverByIdDetails,
  riderAccountStatusById,
  routeByIdDetails,
  riderProfile,
  signOut,
  authorize,
} from "../../Services/backEndUrls";
import SessionStorageService from "../../Services/SessionStorageService";
import logger from "../../Components/Pages/Logger";
import AlertTypes from "../actions/AlertTypes";

const sessionStorageService = SessionStorageService.getService();
export const newAcceessToken = (originalRequest) => {
  const refreshToken = sessionStorageService.getRefreshToken();
  const accessToken = sessionStorageService.getAccessToken();

  return axios
    .post(authorize, {
      refreshToken: refreshToken,
      accessToken: accessToken,
    })
    .then((response) => {
      if (response.status === 200)
        sessionStorageService.setAccessToken(response.data.payload);
      return axios(originalRequest);
    })
    .catch((error) => {});
};
export const sendEmail = () => async (dispatch) => {
  await httpService
    .get(signupMail, { timeout: 10000 })
    .then((response) => {
      AlertTypes(response.status);
      dispatch({
        type: types.SEND_EMAIL,
        payload: response.data.Message,
      });
    })
    .catch((error) => {
      logger.error("Error in sending Email-", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const signout = () => async (dispatch) => {
  const token = sessionStorageService.getDeviceToken();
  await httpService
    .post(signOut, { deviceToken: token }, { timeout: 10000 })
    .then((response) => {
      dispatch({
        type: types.LOG_OUT,
      });
    })
    .catch((error) => {
      logger.error("Error in Sign out-", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getLocation = () => {
  return (dispatch) => {
    return httpService
      .get(getClientLocation, { timeout: 10000 })
      .then((response) => {
        dispatch({
          type: types.GET_LOCATION,
          payload: response.data.payload,
        });
      })
      .catch((error) => {
        logger.error("Error in getting location-", error);

        dispatch({
          type: types.ERROR,
          payload: error.message,
        });
      });
  };
};

export const getUserProfile = (id) => {
  return (dispatch) => {
    return httpService
      .get(riderProfile + id, { timeout: 10000 })
      .then((response) => {
        dispatch({
          type: types.GET_USER_PROFILE,
          payload: response.data.payload.content,
          payload1: response.data.payload.totalPages,
        });
      })
      .catch((error) => {
        logger.error("Error in fetching profile-", error);

        dispatch({
          type: types.ERROR,
          payload: error.message,
        });
      });
  };
};

export const getVehicleProfile = (bookingId) => {
  return (dispatch) => {
    return httpService
      .get(vehicleProfile + bookingId, { timeout: 10000 })
      .then((response) => {
        dispatch({
          type: types.GET_VEHICLE_PROFILE,
          payload: response.data.payload,
        });
      })
      .catch((error) => {
        logger.error("Error in getting Vehicle Profile-", error);

        dispatch({
          type: types.ERROR,
          payload: error.message,
        });
      });
  };
};

export const getContactus = (t) => async (dispatch) => {
  await httpService
    .get(adminContact, { timeout: 10000 })
    .then((response) => {
      dispatch({
        type: types.GET_CONTACT_US,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in Admin contact -", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getNightCabRequests = (t) => async (dispatch) => {
  await axios
    .get(nightCabRequest, { timeout: 10000 })
    .then((response) => {
      dispatch({
        type: types.NIGHT_CAB_REQUESTS,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in Nighte cab requests-", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getNightCabHistory = (
  Date5,
  Date6,
  t,
  name,
  no,
  Size,
  order
) => async (dispatch) => {
  await httpService
    .get(
      nightCabRequestHistory + Date5 + "/" + Date6,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.NIGHT_CAB_HISTORY,
        payload: response.data.payload.pages.content,
        payload1: response.data.payload.pages.totalPages,
      });
    })
    .catch((error) => {
      logger.error("Error in cab history", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getTripByDate = (Date1, Date2, t, name, no, Size, order) => async (
  dispatch
) => {
  await httpService
    .get(
      tripDetailsByDate + Date1 + "/" + Date2,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.GET_TRIP_BY_DATE,
        payload: response.data.payload.pages.content,

        payload1: response.data.payload.pages.totalPages,
      });
    })
    .catch((error) => {
      logger.error("Error in getting trips ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getStatusByDate = (
  Date3,
  Date4,
  t,
  name,
  no,
  Size,
  order
) => async (dispatch) => {
  await httpService
    .get(
      vehicleStatusByDate + Date3 + "/" + Date4,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.GET_STATUS_BY_DATE,
        payload: response.data.payload.pages.content,
        payload1: response.data.payload.pages.totalPages,
      });
    })
    .catch((error) => {
      logger.error("Error in vehicle status", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getStatusTable = (t) => async (dispatch) => {
  await httpService
    .get(homeStatusTable, { timeout: 10000 })
    .then((response) => {

      dispatch({
        type: types.GET_STATUS_TABLE,
        payload: response.data.payload
    
      });
    })
    .catch((error) => {
      logger.error("Error in status table data ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getHomePageCard = () => async (dispatch) => {
  await httpService
    .get(homePageCards)
    .then((response) => {
      dispatch({
        type: types.HOME_PAGE_CARD,
        payload: response.data.payload,
      
      });
    })

    .catch((error) => {
      logger.error("Error in trips cards ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getuserinfo = (t, name, no, Size, order) => async (dispatch) => {
  await httpService
    .get(
      getUserDetails,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 20000 }
    )
    .then((response) => {
      console.log(response.data.payload)

      dispatch({
        type: types.GET_USER_INFO,
        payload: response.data.payload,
        
      });
    })
    .catch((error) => {
      logger.error("Error in getting user details ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getEmployeeStatus = (t, name, no, Size, order) => async (
  dispatch
) => {
  await httpService
    .get(
      riderAccountStatus,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.GET_EMPLOYEE_STATUS,
        payload: response.data.payload.content,
        payload1: response.data.payload.totalPages,
      });
    })
    .catch((error) => {
      logger.error("Error in getting user  account status ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getVehicleInfo = (t, name, no, Size, order) => async (
  dispatch
) => {
  await httpService
    .get(
      vehicleDetails,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.GET_VEHICLE_INFO,
        payload: response.data.payload.pagedResult.content,
        payload1: response.data.payload.pagedResult.totalPages,
        payload2: response.data.payload.allResult,
      });
    })
    .catch((error) => {
      logger.error("Error in getting vehicle details ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getVehicleRoute = (t, name, no, Size) => async (dispatch) => {
  await httpService
    .get(
      vehicleRouteDetails,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.GET_VEH_ROUTES,
        payload: response.data.payload.content,
        payload1: response.data.payload.totalPages,
      });
    })
    .catch((error) => {
      logger.error("Error in getting vehicle routes ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};
export const getRouteinfo = (t, name, no, Size, order) => async (dispatch) => {
  await httpService
    .get(
      routeDetails,
      {
        params: { sortBy: name, pageNo: no, pageSize: Size, orderBy: order },
      },
      { timeout: 10000 }
    )
    .then((response) => {
      dispatch({
        type: types.GET_ROUTE_INFO,
        payload: response.data.payload.pagedResult.content,
        payload1: response.data.payload.pagedResult.totalPages,
        payload2: response.data.payload.allResult,
      });
    })
    .catch((error) => {
      logger.error("Error in getting routes ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getRiderById = (Eid, t) => async (dispatch) => {
  await httpService
    .get(riderByIdDetails + `${Eid}`, { timeout: 10000 })
    .then((response) => {
      dispatch({
        type: types.GET_ROUTE_INFO,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in individual rider details ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getDriverById = (Eid, t) => async (dispatch) => {
  await httpService
    .get(driverByIdDetails + `${Eid}`, { timeout: 10000 })
    .then((response) => {
      dispatch({
        type: types.GET_DRIVER_BY_ID,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in individual driver details ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getEmpById = (Eid, t) => async (dispatch) => {
  await httpService
    .get(
      riderAccountStatusById + `${Eid}`,
      { timeout: 10000 },
      {
        employeeId: Eid,
      }
    )
    .then((response) => {
      dispatch({
        type: types.GET_EMP_BY_ID,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in individual account status ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const getRouteById = (routeId, t) => async (dispatch) => {
  await httpService
    .get(
      routeByIdDetails + `${routeId}`,
      { timeout: 10000 },
      {
        routeId: routeId,
      }
    )
    .then((response) => {
      dispatch({
        type: types.GET_ROUTE_BY_ID,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in particular route ", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};
