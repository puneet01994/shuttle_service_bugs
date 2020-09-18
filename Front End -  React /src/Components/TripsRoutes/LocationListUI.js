import React from "react";

import { AddButton, DeleteButton } from "../Pages/Buttons";
import PropTypes from "prop-types";

import { Button, Modal } from "react-bootstrap";
import {
  Card,
  CardBody,
  Col,
  Row,
  Table,
  Form,
  FormGroup,
  Label,
  CardHeader,
  Input,
} from "reactstrap";
import "../../Styles/table.css";

import Loader from "../Pages/Loader";
import { clientLocations, location, addClientLocations, submit } from "../../Constants/constants";

/**
 * display the location list
 * opens the modal to add new loactiom
 * @param {object} props 
 */
export default function LocationListUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="LocationList" className="container">
      <h3>{clientLocations}</h3>

      <div className="Tbl">
        <Card>
          <CardHeader>
            <Row xs="8">
              <Col>
                <AddButton addModalopen={props.addModalopen} />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>{location}</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.status1 &&
                  props.status1.map((row) => (
                    <tr
                      data-test="locationlistRow"
                      key={row.location}
                      onClick={(e) => props.handleCheckChange(row.location)}
                    >
                      <td>{row.location}</td>
                      <td>
                        {row.location === props.targetId && (
                          <DeleteButton
                            data-test="deleteButton"
                            delete={props.delete}
                            targetId={props.targetId}
                          />
                        )}{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>

      <Modal
        onHide={props.addModalclose}
        show={props.addModalShow}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="route">{addClientLocations}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form className="Add-form" onSubmit={props.handleSubmit}>
              <FormGroup>
                <Label for="location">{location}</Label>
                <Input
                  style={{ width: "400px" }}
                  placeholder="Location"
                  type="text"
                  id="location"
                  required
                  value={props.value}
                  onChange={props.handleChange}
                />
              </FormGroup>
              <Button type="submit">{submit}</Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

LocationListUI.propTypes = {
  getContactus: PropTypes.func,
  status1: PropTypes.array,
  token: PropTypes.string,
  handleChange: PropTypes.func,
  targetId: PropTypes.string,
  handleCheckChange: PropTypes.func,
  addModalclose: PropTypes.func,
  delete: PropTypes.func,
  isLoading: PropTypes.bool,
  addModalopen: PropTypes.func,
  addModalShow: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
};
