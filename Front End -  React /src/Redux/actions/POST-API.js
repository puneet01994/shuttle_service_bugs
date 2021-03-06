
import firebase from "firebase/";

import { types } from "../types";
import httpService from "../../Services/httpService";
import {
  nightCabById,
  signin,
  userAdd,
  locationAdd,
  routeAdd,
  vehicleAdd,
  vehicleRouteAdd,
} from "../../Services/backEndUrls";

import SessionStorageService from "../../Services/SessionStorageService";
import logger from "../../Components/Pages/Logger";

const sessionStorageService = SessionStorageService.getService();

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "90763504780",
    apiKey: "AIzaSyAhJFp4AdRAIF6Pb_QbP9RXzczO1YhXzOs",
    authDomain: "shuttle-service-8e8e7.firebaseapp.com",
    databaseURL: "https://shuttle-service-8e8e7.firebaseio.com",
    projectId: "shuttle-service-8e8e7",
    storageBucket: "shuttle-service-8e8e7.appspot.com",
    appId: "1:90763504780:web:2e86758c4edea982865fa9",
    measurementId: "G-22LEMTYLEK",
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("firebase-messaging-sw.js")
      .then(
        function(registration) {
          console.log("service worker registration succeeded:", registration);
        },
        function(error) {
          console.log("service worker registration failed:", error);
        }
      );
  } else {
    console.log("service workers are not supported.");
  }
};

export const askForPermissioToReceiveNotifications = () => async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    sessionStorageService.setDeviceToken(token);

    return token;
  } catch (error) {}
};

export const getNightCabById = (employeeId) => async (dispatch) => {
  await httpService
    .post(nightCabById + `${employeeId}`)
    .then((response) => {
      dispatch({
        type: types.EDIT_NIGHT_CAB_BY_ID,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      logger.error("Error in getting individual night cab", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const login = (e) => async (dispatch) => {
  await httpService
    .post(signin, e)
    .then((response) => {
      sessionStorageService.setAccessToken(response.data.payload);
      sessionStorageService.setRefreshToken(response.data.payload);
      dispatch({
        type: types.LOGIN,
        payload: response.data.payload.accessToken,
        payload1: response.data.payload.boolean,
      });
    //  SuccessMsg();
    })
    .catch((error) => {
      logger.error("Error while login", error);

      return error;
    });
};

export const postuserInfo = (e, t) => async (dispatch) => {
  try {
    await httpService.post(userAdd, e).then((response) => {
      if (e.role === "EMPLOYEE") {
        dispatch({
          type: types.EDIT_NIGHT_CAB_BY_ID,
          payload: response.data.payload.data,
        });
        //  SuccessAlert();
      }
      if (e.role === "DRIVER") {
        dispatch({
          type: types.POST_DRIVER_INFO,
          payload: response.data.payload,
        });
        // SuccessAlert();
      }
    });
  } catch (error) {
    logger.error("Error while adding user", error);

    dispatch({
      type: types.ERROR,
      payload: error.message,
    });
    return error;
  }
};

//201
export const postLocation = (e, t) => async (dispatch) => {
  try {
    await httpService.post(locationAdd, e).then((response) => {
      dispatch({
        type: types.POST_LOCATION,
        payload: response.data.payload,
      });
      //SuccessAlert();
    });
  } catch (error) {
    logger.error("Error while addding location ", error);

    dispatch({
      type: types.ERROR_DISPATCH,
      payload: error.response,
    });
    //return error;
  }
};

//201
export const postRouteInfo = (e, t) => async (dispatch) => {
  try {
    await httpService.post(routeAdd, e).then((response) => {
      dispatch({
        type: types.POST_ROUTE_INFO,
        payload: response.data.payload,
      });
      // SuccessAlert();
    });
  } catch (error) {
    logger.error("Error while adding routes", error);

    return error;
  }
};
//201
export const postVehicleInfo = (e, t) => async (dispatch) => {
  try {
    await httpService.post(vehicleAdd, e).then((response) => {
      dispatch({
        type: types.POST_VEHICLE_INFO,
        payload: response.data.payload,
      });
      // SuccessAlert();
    });
  } catch (error) {
    logger.error("Error while adding vehicle", error);

    return error;
  }
};
//201
export const postVehicleRouteInfo = (e, t) => async (dispatch) => {
  try {
    await httpService.post(vehicleRouteAdd, e).then((response) => {
      dispatch({
        type: types.POST_VEHICLE_ROUTE_INFO,
        payload: response.data.payload,
      });
      // SuccessAlert();
    });
  } catch (error) {
    logger.error("Error while adding vehicle route", error);

    return error;
  }
};
