import React from "react";

import { Link } from "react-router-dom";

import { Card, CardBody, Button, CardColumns } from "reactstrap";
import "../../Styles/table.css";
import PropTypes from "prop-types";

import Loader from "./Loader";
import { adminContact, name, email, edit, contactNumber } from "../../Constants/constants";

/**
 * ContactusUI function to display the admin contact details
 * @param {object} props 
 */
export default function ContactusUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="AdminContact" className="container">
      <h3>{adminContact}</h3>

      <div className="Tbl">
        <Card>
          <CardBody
            data-test="cardbody"
            style={{ maxWidth: "500px" }}
            onClick={(e) => props.handleCheckChange(props.status.name)}
          >
            <tr>{name} : {props.status.name}</tr>
            <tr>{contactNumber} : {props.status.contactNumber}</tr>
            <tr>{email} : {props.status.emailId}</tr>
            <CardColumns>
              <Link
                to={{
                  pathname: "/dashboard/Contactus/UpdateContactus",
                  state: { contactNumber: props.targetId },
                }}
              >
                <Button variant="outline-secondary" size="sm" value="Edit">
                  {edit}
                </Button>
              </Link>
            </CardColumns>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

ContactusUI.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  token: PropTypes.string,
  isLoading: PropTypes.bool,
  targetId: PropTypes.string,
  handleCheckChange: PropTypes.func,
};
