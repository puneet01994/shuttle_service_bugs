import React from "react";
import PropTypes from "prop-types";

import { DeleteButton } from "../Pages/Buttons";
import { Button, Modal } from "react-bootstrap";
import {
  Card,
  CardBody,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../../Styles/table.css";
import Loader from "../Pages/Loader";
import TableHeader from "../Pages/TableHeader";
import { vehicleRouteDetails, Rid, route, vehicleNumber, latestBookingDate, changeVehicle, oldVehicleNumber, newVehicleNumber, submit, addVehicleRoutes, selectRoute, routeTimings, selectVehicle } from "../../Constants/constants";

/**
 * to display the vehicle route details
 * opens a modal to add the vehicle routes
 * @param {object} props 
 */
export default function VehicleRoutesUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="VehicleRoutes" className="container">
      <h3>{vehicleRouteDetails}</h3>
      <div className="BigTbl">
        <Card>
          <TableHeader
            handleTableChange={props.handleTableChange}
            onChange={props.handleTableChange}
            val={props.val}
            addModalopen={props.addModalopen}
            addModalopen1={props.addModalopen1}
            vehRoute={props.vehRoute}
            vehicleInfo={props.vehicleInfo}
          />

          <CardBody>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>{Rid}</th>
                  <th>{route}</th>
                  <th>{vehicleNumber}</th>
                  <th>{latestBookingDate}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.status1.map((row) => (
                  <tr
                    data-test="vehicleRoutesRow"
                    key={row.routeId}
                    onClick={(e) => props.handleCheckChange(row.id)}
                  >
                    <td>{row.routeId}</td>
                    <td>{row.route}</td>
                    <td>{row.vehicleNumber}</td>
                    <td>{row.latestBookingDate}</td>

                    <td>
                      {row.id === props.targetId && (
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
      </div>{" "}
      <Modal
        onHide={props.addModalclose1}
        show={props.addModalShow1}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="vehicle">{changeVehicle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form className="Add-form" onSubmit={props.handleSubmit1}>
              <FormGroup>
                <Label>{oldVehicleNumber}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="text"
                  placeholder="Old vehicle Number"
                  id="oldVehicleNumber"
                  required
                  value={props.value}
                  onChange={props.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Id">{newVehicleNumber}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="text"
                  placeholder="New Vehicle Number"
                  id="newVehicleNumber"
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
      <Modal
        onHide={props.addModalclose}
        show={props.addModalShow}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="vehicle">{addVehicleRoutes}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3 className="Add-form">{vehicleRouteDetails}</h3>

            <Form className="Add-form" onSubmit={props.handleSubmit}>
              <FormGroup>
                <Label for="Route_id">{Rid}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="select"
                  onChange={props.handleSelectedItemsRoute}
                  label="route_id"
                >
                  {" "}
                  <option>{selectRoute}</option>
                  {props.routeid &&
                    props.routeid.map((item, index) => (
                      <option
                        data-test="routeid"
                        key={index}
                        value={item.routeId}
                      >
                        {item.routeId}
                      </option>
                    ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="routes">{route}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="textarea"
                  disabled
                  value={props.route + ""}
                />
              </FormGroup>
              <FormGroup>
                <Label for="routes">{routeTimings}</Label>
                <Input
                  style={{ width: "400px" }}
                  type="textarea"
                  disabled
                  required
                  value={props.routeTimings + ""}
                />
              </FormGroup>
              <FormGroup>
                <Label for="VehicleNo.">{vehicleNumber}</Label>

                <Input
                  style={{ width: "400px" }}
                  type="select"
                  onChange={props.handleSelectedItemsVehicle}
                  label="Vehicle Number"
                >
                  <option>{selectVehicle}</option>
                  {props.vehicles &&
                    props.vehicles.map((item, index) => (
                      <option
                        data-test="vehicleno"
                        key={index}
                        value={item.vehicleNumber}
                      >
                        {item.vehicleNumber}
                      </option>
                    ))}
                </Input>
              </FormGroup>

              <Button type="submit">{submit}</Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

VehicleRoutesUI.propTypes = {
  isLoading: PropTypes.bool,
  addModalopen: PropTypes.func,
  addModalShow: PropTypes.bool,
  addModalopen1: PropTypes.func,
  status1: PropTypes.array,
  handleCheckChange: PropTypes.func,
  deleteVehicleRouteInfo: PropTypes.func,
  addModalclose1: PropTypes.func,
  addModalShow1: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleSubmit1: PropTypes.func,
  handleSelectedItemsRoute: PropTypes.func,
  handleSelectedItemsVehicle: PropTypes.func,
  value: PropTypes.string,
  routeid: PropTypes.string,
  handleTableChange: PropTypes.func,
  val: PropTypes.number,
  vehRoute: PropTypes.string,
  handleChange: PropTypes.func,
  delete: PropTypes.func,
  addModalclose: PropTypes.func,
  targetId: PropTypes.string,
  vehicles: PropTypes.object,
  vehicleInfo: PropTypes.string,
  route: PropTypes.string,
  routeTimings: PropTypes.string,
};
