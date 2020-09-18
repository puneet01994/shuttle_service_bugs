import React from "react";
import "../../Styles/index.css";
import { networtError } from "../../Constants/constants";

/**
 * NetworkError function to display the network error
 */
const NetworkError = () => (
  <div className="diamond">
    <div className="diamondText">
      <h3>{networtError}</h3>
      <p>
        Could not retrieve the HTML document because of your network connection
      </p>
    </div>
  </div>
);

export default NetworkError;
