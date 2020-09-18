import React from "react";
import { pageNotFound } from "../../Constants/constants";

/**
 * to display 404 error
 */
const NotFound = () => (
  <>
    <div style={{ position: "absolute", marginTop: "5%", marginLeft: "10%" }}>
      <h3>{pageNotFound}</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  </>
);

export default NotFound;
