import React from "react";
import PropTypes from "prop-types";

import { Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import Loader from "../Pages/Loader";

import {
  updateDriverDetails,
  name,
  did,
  email,
  mobileNumber,
  gender,
  male,
  female,
} from "../../Constants/constants";

/**
 * updateDriverUI function to update the driver details
 * @param {object} props
 *      @param {string} UpdateDriver
 */

export default function UpdateDriverUI(props) {
  const { UpdateDriver } = props;

  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="UpdateDriver" className="Tbl">
      <h1 className="Add-form">{updateDriverDetails}</h1>
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
                value={UpdateDriver.name}
                onChange={props.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Id">{did}</Label>
              <Input
                style={{ width: "400px" }}
                type="text"
                id="id"
                required
                value={UpdateDriver.id}
                disabled
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
                value={UpdateDriver.emailId}
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
                value={UpdateDriver.contactNumber}
                onChange={props.handleChange}
              />
            </FormGroup>
            <FormGroup tag="fieldset" required>
              <legend>{gender}</legend>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    id="MALE"
                    value="MALE"
                    checked={UpdateDriver.gender === "MALE"}
                    onChange={props.handleOptionChange}
                  />{" "}
                  {male}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    id="FEMALE"
                    value="FEMALE"
                    checked={UpdateDriver.gender === "FEMALE"}
                    onChange={props.handleOptionChange}
                  />{" "}
                  {female}
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup></FormGroup>

            <input type="submit" className="button" value="submit" />
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

UpdateDriverUI.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  UpdateDriver: PropTypes.object,
  isLoading: PropTypes.bool,
  submitHandle: PropTypes.func,
};
