import React from "react";

/**
 * to display the server error
 */
const Oops = () => {
  return (
    <div style={{ position: "absolute", marginTop: "5%", marginLeft: "10%" }}>
      <h3>Oops something went wrong or Could not open connection to server </h3>
      <p>Please refresh the page and try again</p>
    </div>
  );
};
export default Oops;
