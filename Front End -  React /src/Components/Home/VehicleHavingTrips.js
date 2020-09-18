import React from "react";

import "../../Styles/table.css";
import PropTypes from "prop-types";

import { Col, Row, Table, Alert } from "reactstrap";

import { vehicleNumber, did, driverName, noVehicleAssigned } from "../../Constants/constants";


/**
 * VehicleHavingTrips function to dusplay the deatils of the vehicles
 * having trips on that day.
 * @param {object} props 
 *   @param {string} status2
 */
export default function VehicleHavingTrips({vehiclesHavingTrips}) {
  return vehiclesHavingTrips.length > 0 ? (
    <div data-test="havingTrips" className="BigTbl">
      <Row>
        <Col>
          <Table responsive striped hover>
            <thead>
              <tr>
                <th>{vehicleNumber}</th>
                <th>{did}</th>
                <th>{driverName}</th>
              </tr>
            </thead>
            <tbody>
              {vehiclesHavingTrips.map(row => (
                <tr data-test="VehicleTipsrow" key>
                  <td>{row.vehicleNumber}</td>
                  <td>
                    {row.driverId !== null ? "Not assigned" : row.driverId}
                  </td>
                  <td>{row.name === null ? "Not assigned" : row.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  ) : (
    <Alert data-test="NoVehicleAssigned" color="dark">{noVehicleAssigned}</Alert>
  );
}

VehicleHavingTrips.propTypes = {
  status6: PropTypes.array,
};