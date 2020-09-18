import React from "react";

import PropTypes from "prop-types";
import "../../Styles/table.css";

import {
  Card,
  CardBody,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import "../../Styles/table.css";

import Loader from "../Pages/Loader";
import { DeleteButton } from "../Pages/Buttons";
import TableHeader from "../Pages/TableHeader";
import { vehicleDetails, vehicleNumber, seats, vehicleModel, addVehicleRoutes, submit } from "../../Constants/constants";


/**
 * dispaly the vehicle details
 * modal to add new vehicle
 * @param {object} props 
 */
export default function VehicleUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="VehicleInfo" className="container">
      <h3>{vehicleDetails}</h3>

      <div className="BigTbl">
        <Card>
          <TableHeader
            handleTableChange={props.handleTableChange}
            onChange={props.handleTableChange}
            val={props.val}
            addModalopen={props.addModalopen}
            vehicleInfo={props.vehicleInfo}
          />
          <CardBody>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>{vehicleNumber}</th>
                  <th>{seats}</th>
                  <th>{vehicleModel}</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.status1 &&
                  props.status1.map((row) => (
                    <tr
                      data-test="vehicleInfoRow"
                      key={row.vehicleNumber}
                      onClick={(e) =>
                        props.handleCheckChange(row.vehicleNumber)
                      }
                    >
                      <td>{row.vehicleNumber}</td>
                      <td>{row.seats}</td>
                      <td>{row.vehicleModel}</td>

                      <td>
                        {row.vehicleNumber === props.targetId && (
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
        data-test="modelform"
        onHide={props.addModalclose}
        show={props.addModalShow}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="route">{addVehicleRoutes}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form className="Add-form" onSubmit={props.handleSubmit}>
              <FormGroup>
                <Label for="VehicleNo.">{vehicleNumber}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="text"
                  id="vehicleNumber"
                  placeholder="Vehicle No."
                  required
                  value={props.value}
                  onChange={props.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="seats">{seats}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="int"
                  id="seats"
                  placeholder="Seats"
                  required
                  value={props.value}
                  onChange={props.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Vehicle_ model">{vehicleModel}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="text"
                  id="vehicleModel"
                  placeholder="Vehicle Model"
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

VehicleUI.propTypes = {
  isLoading: PropTypes.bool,
  handleEvent: PropTypes.func,
  handleTableChange: PropTypes.func,
  tableName: PropTypes.string,
  fileName: PropTypes.string,
  status: PropTypes.array,
  val: PropTypes.number,
  addModalopen: PropTypes.func,
  status1: PropTypes.array,
  targetId: PropTypes.string,
  handleCheckChange: PropTypes.func,
  delete: PropTypes.func,
  value: PropTypes.string,
  vehicleInfo: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  addModalclose: PropTypes.func,
  addModalShow: PropTypes.bool,
};
