import React from "react";
import loading from "../../Assets/loading.gif";

/**
 * to display the loading process till the data is not recieved
 */
export default function Loader() {
  return (
    <div data-test="loader">
      <input className="background" type="image" src={loading} alt="loading" />
    </div>
  );
}
