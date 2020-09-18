import React from "react";
import { notAvailable } from "../../Constants/constants";

/**
 * to display N?A when no data available
 * @param {object} props 
 */
export const Na = props => {
  return <div data-test="NA">{notAvailable}</div>;
};
