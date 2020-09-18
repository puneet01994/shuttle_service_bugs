import swal from "sweetalert";

/**
 * to display the success alert on adding new  data
 */
export const SuccessAlert = () => {
  return swal({
    title: "Successfully Added",
    text: "",
    icon: "succes",
    button: "ok"
  });
};

/**
 * 
 * @param {string} text 
 * to give success message
 */
export const SuccessMsg = text => {
  return swal({
    title: "Successfully",
    text: text,
    icon: "succes",
    button: "ok"
  });
};

/**
 * to give delete successfully messange on deleting th entry
 * @param {string} text 
 */
export const DeleteAlert = text => {
  return swal({
    title: "Successfully deleted",
    text: text,
    icon: "succes",
    button: "ok"
  });
};

/**
 * to give confermation on upadating a particular entry
 */
export const SuccessUpdate = () => {
  return swal({
    title: "Successfully Updated",
    text: "",
    icon: "succes",
    button: "ok"
  });
};

/**
 * alert message before updating the details
 */
export const areYouSure = () => {
  return swal({
    title: "Are you sure?",
    icon: "info",
    buttons: true
  });
};

/**
 * alert message before deleting the entry
 */
export const areYouSureBeforeDelete = () => {
  return swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover!",
    icon: "warnin",
    buttons: true,
    dangerMode: false
  });
};
