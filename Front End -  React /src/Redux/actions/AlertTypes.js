import Swal from "sweetalert2";

import SessionStorageService from "../../Services/SessionStorageService";
import { newAcceessToken } from "./GET-API";
const sessionStorageService = SessionStorageService.getService();

function AlertTypes(type, message, config) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-left",
    showConfirmButton: false,

    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  if (type === 500) {
    Toast.fire({
      type: "error",
      icon: "error",
      title: message,
    });
  } else if (type === 400) {
    Toast.fire({
      type: "error",
      icon: "error",
      title: message,
    });
  } else if (config.url === "/authorize" && type === 401) {
    Toast.fire({
      type: "info",
      icon: "info",
      title: "Session Expired",
    });
    sessionStorageService.clearToken();

    window.location = "/";
  } else if (type === 401 && config.url !== "/authorize") {
    config._retry = true;

    newAcceessToken(config);
  } else if (type === 403) {
    Toast.fire({
      type: "error",
      icon: "error",
      title: message,
    });
  } else if (type === 404) {
    Toast.fire({
      type: "error",
      icon: "error",
      title: message,
    });
  } else if (type === 429) {
    Toast.fire({
      type: "error",
      icon: "error",
      title: message,
    });
  } else if (type === 200) {
    Toast.fire({
      type: "success",
      icon: "success",
    });
  } else if (type === 201) {
    Toast.fire({
      type: "success",
      icon: "success",
      title: "Added successfully",
    });
  } else if (type === 204) {
    Toast.fire({
      type: "success",
      icon: "success",
      title: "Deleted successfully",
    });
  } else {
    return {
      name: "Oops!",
    };
  }
}

export default AlertTypes;
