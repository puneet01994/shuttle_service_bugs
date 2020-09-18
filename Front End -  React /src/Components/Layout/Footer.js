import React, { Component } from "react";

import { nineleaps, poweredBy, react } from "../../Constants/constants";


/**
 * to display the footer and the the nineleaps link
 */
class Footer extends Component {
  render() {
    return (
      <div data-test="Footer">
        <span>
          <a href="https://www.nineleaps.com/">{nineleaps}</a> &copy; 2020{" "}
        </span>
        <span className="ml-auto">
          {poweredBy} <a href="https://coreui.io/react">{react}</a>
        </span>
      </div>
    );
  }
}

export default Footer;
