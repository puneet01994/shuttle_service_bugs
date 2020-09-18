import React from "react";

import PropTypes from "prop-types";

import { Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";

import Loader from "./Loader";
import { updateAdminContact, name, email, mobileNumber } from "../../Constants/constants";

/**
 * to update the admin contacts
 * @param {object} props 
 *  
 * 
 */
export default function UpdateContactUI(props) {
  const { UpdateContact } = props;

  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="UpdateAdmin" className="Tbl">
      <h1 className="Add-form">{updateAdminContact}</h1>
      <Card>
        <CardBody>
          <Form className="Add-form" onSubmit={props.submitHandle}>
            <FormGroup>
              <Label for="name">{name}</Label>
              <Input
                style={{ width: "400px" }}
                type="text"
                id="name"
                required
                value={UpdateContact.name}
                onChange={props.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">{email}</Label>
              <Input
                style={{ width: "400px" }}
                type="email"
                id="emailId"
                required
                value={UpdateContact.emailId}
                onChange={props.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="PhoneNo.">{mobileNumber}</Label>
              <Input
                style={{ width: "400px" }}
                type="text"
                id="contactNumber"
                required
                value={UpdateContact.contactNumber}
                onChange={props.handleChange}
              />
            </FormGroup>

            <FormGroup></FormGroup>

            <input type="submit" className="button" value="submit" />
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

UpdateContactUI.propTypes = {
  isLoading: PropTypes.bool,
  submitHandle: PropTypes.func,
  handleChange: PropTypes.func,
  UpdateContact: PropTypes.object,
};
