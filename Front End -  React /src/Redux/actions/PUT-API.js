import { types } from "../types";
import { SuccessUpdate } from "../../Components/Pages/Swal";
import httpService from "../../Services/httpService";
import {
  vehicleNumberUpdate,
  nightCabByIdUpdate,
  nightCabUpdate,
  userUpdate,
  riderAccountStatusUpdate,
  routeUpdate,
  adminContactUpdate,
} from "../../Services/backEndUrls";
import logger from "../../Components/Pages/Logger";

export const updateVehicleNumber = (body, t) => async (dispatch) => {
  try {
    await httpService.put(vehicleNumberUpdate, body).then((response) => {
      dispatch({
        type: types.CHANGE_VEHICLE_NO,
        payload: body.oldVehicleNumber,
        payload1: body.newVehicleNumber,
      });
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating vehicle number", error);

    return error;
  }
};

export const updateNightCabById = (body, t) => async (dispatch) => {
  try {
    await httpService.put(nightCabByIdUpdate, body).then((response) => {
      dispatch({
        type: types.CHANGE_VEHICLE_NO,
        payload: body,
        payload1: body.employeeId,
      });
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating individual night cab", error);

    return error;
  }
};

export const updateNightCab = (body, t) => async (dispatch) => {
  try {
    await httpService.put(nightCabUpdate, body).then((response) => {
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating night cab", error);

    return error;
  }
};

export const updateRiderDetail = (body, t) => async (dispatch) => {
  try {
    await httpService.put(userUpdate, body).then((response) => {
      dispatch({
        type: types.CHANGE_VEHICLE_NO,
        payload: body,
        payload1: body.ids,
      });
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating rider data", error);

    return error;
  }
};

export const updateDriverDetail = (body, t) => async (dispatch) => {
  try {
    await httpService.put(userUpdate, body).then((response) => {
      dispatch({
        type: types.UPDATE_DRIVER,
        payload: body,
        payload1: body.id,
      });
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating driver", error);

    return error;
  }
};

export const updateEmpDetail = (body, t) => async (dispatch) => {
  try {
    await httpService
      .put(riderAccountStatusUpdate + `${body.employeeId}`, body)
      .then((response) => {
        dispatch({
          type: types.UPDATE_EMP_STATUS,
          payload: body,
          payload1: body.employeeId,
        });
        SuccessUpdate();
      });
  } catch (error) {
    logger.error("Error while updating employee account status", error);

    return error;
  }
};

export const updateRouteDetail = (body, t) => async (dispatch) => {
  try {
    await httpService.put(routeUpdate, body).then((response) => {
      dispatch({
        type: types.UPDATE_ROUTE,
        payload: body,
        payload1: body.routeId,
      });
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating route", error);

    return error;
  }
};

export const updateAdminContact = (body, t) => async (dispatch) => {
  try {
    await httpService.put(adminContactUpdate, body).then((response) => {
      dispatch({
        type: types.UPDATE_CONTACT_US,
        payload: body,
      });
      SuccessUpdate();
    });
  } catch (error) {
    logger.error("Error while updating admin contact", error);

    return error;
  }
};
