import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem, Button } from "reactstrap";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import nineleaps from "../../Assets/nineleaps1.jpg";
import nlps from "../../Assets/nlps.png";
import PropTypes from "prop-types";

import {
  home,
  employee,
  driver,
  sendEmail,
  logout,
} from "../../Constants/constants";

/**
 * displays the Admindash
 * AppSideBarToggler to toggle the side bar
 * Nav to display the navbar items
 * buttons to send mail and logout
 */
export default class AdminDash extends React.Component {
  render() {
    return (
      <>
        <AppSidebarToggler
          data-test="AdminDashDiv"
          className="d-lg-none"
          display="md"
          mobile
        />

        <AppNavbarBrand
          full={{ src: nineleaps, width: 150, height: 35, alt: "Nineleaps" }}
          minimized={{
            src: nlps,
            width: 30,
            height: 30,
            alt: "Nineleaps",
          }}
        />
        <AppSidebarToggler className="d-md-down-none mr-auto" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link">
              {home}
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/dashboard/Rider" className="nav-link">
              {employee}
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/dashboard/Driver" className="nav-link">
              {driver}
            </NavLink>
          </NavItem>
          <Button
            data-test="buttonComponent"
            variant="outline-secondary"
            size="sm"
            onClick={(e) => this.props.onSendMail(e)}
          >
            {sendEmail}
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            data-test="LogoutButtonComponent"
            variant="outline-secondary"
            size="sm"
            onClick={(e) => this.props.onLogout(e)}
          >
            {logout}
          </Button>
          &nbsp; &nbsp; &nbsp;
        </Nav>
      </>
    );
  }
}

AdminDash.propTypes = {
  onSendMail: PropTypes.func,
  onLogout: PropTypes.func,
};
