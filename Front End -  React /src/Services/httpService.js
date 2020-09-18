import axios from "axios";
import SessionStorageService from "./SessionStorageService";

import AlertTypes from "../Redux/actions/AlertTypes";

axios.defaults.baseURL = "http://d302d9ca93b6.ngrok.io";

const sessionStorageService = SessionStorageService.getService();
const isHandlerEnabled = (config = {}) => {
  // eslint-disable-next-line no-prototype-builtins
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};


axios.interceptors.request.use((request) => requestHandler(request));

const requestHandler = (request) => {
  const at = sessionStorageService.getAccessToken();

  if (request) {
    request.headers["Authorization"] = at;
  }
  return request;
};

axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // AlertTypes(response.status);
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    AlertTypes(
      error.response && error.response.status,
      error.message,
      error.config
    );

    return Promise.reject({ ...error });
  }
};

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
