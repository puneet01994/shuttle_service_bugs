import { types } from "../types";
import {
  riderDelete,
  locationDelete,
  routeDelete,
  driverDelete,
  vehicleDelete,
  vehicleRouteDelete,
} from "../../Services/backEndUrls";
import httpService from "../../Services/httpService";
import logger from "../../Components/Pages/Logger";

export const clearCurrentTarget = () => async (dispatch) => {
  dispatch(clearcurrenttarget());
};

export const clearcurrenttarget = () => {
  return {
    type: types.CLEAR_TARGET,
  };
};

export const deleteRider = (Eid, t) => async (dispatch) => {
  await httpService
    .delete(riderDelete + `${Eid}`, {
      data: { id: Eid },
    })
    .then((response) => {
      dispatch({
        type: types.DELETE_DRIVER,
        payload: Eid,
      });
    //  DeleteAlert();
    })
    .catch((error) => {
      logger.error("Error in deleting rider", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const deleteDriver = (targetId) => async (dispatch) => {
  await httpService
    .delete(driverDelete + `${targetId}`, {
      data: { id: targetId },
    })
    .then((response) => {
      dispatch({
        type: types.DELETE_DRIVER,
        payload: targetId.id,
      });
 //     DeleteAlert();
    })
    .catch((error) => {
      logger.error("Error in deleting driver", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const deleteLocation = (location, t) => async (dispatch) => {
  await httpService
    .delete(locationDelete + `${location}`, {
      data: { location: location },
    })
    .then((response) => {
      dispatch({
        type: types.DELETE_LOCATION,
        payload: location,
      });
   //   DeleteAlert();
    })
    .catch((error) => {
      logger.error("Error in deleting location", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const deleteRoute = (RouteId, t) => async (dispatch) => {
  await httpService
    .delete(routeDelete + `${RouteId}`, {
      data: { RouteId: RouteId },
    })
    .then((response) => {
      dispatch({
        type: types.DELETE_ROUTE,
        payload: RouteId,
      });
    //  DeleteAlert();
    })
    .catch((error) => {
      logger.error("Error in deleting route", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const deleteVehicleInfo = (VehicleNumber, t) => async (dispatch) => {
  await httpService
    .delete(vehicleDelete + `${VehicleNumber}`, {
      data: { vehicleNumber: VehicleNumber },
    })
    .then((response) => {
      dispatch({
        type: types.DELETE_VEHICLE_INFO,
        payload: VehicleNumber,
      });
    })
    .catch((error) => {
      logger.error("Error in deleting vehicle", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};

export const deleteVehicleRouteInfo = (id, t) => async (dispatch) => {
  await httpService
    .delete(vehicleRouteDelete + `${id}`, {
      data: { id: id },
    })
    .then((response) => {
      dispatch({
        type: types.DELETE_VEHICLE_ROUTE_INFO,
        payload: id,
      });
   //   DeleteAlert();
    })
    .catch((error) => {
      logger.error("Error in deleting vehicle route", error);

      dispatch({
        type: types.ERROR,
        payload: error.message,
      });
    });
};
