import React from "react";
import "../../Styles/table.css";

import { Col, Row, Table, Alert } from "reactstrap";
import PropTypes from "prop-types";

import {
  noOngoingTrips,
  driverStatusHeaders,
} from "../../Constants/constants";

/**
 * DriverStatusUI function to dispaly the data
 * of the driver status for the day.
 * @param {object} props
 *    @param {string} status1
 */

export default function DriverStatusUI({ driverStatus }) {
  return driverStatus.length > 0 ? (
    <div data-test="driverStatus" className="BigTbl">
      <Row>
        <Col>
          <Table responsive striped hover>
            <thead>
              <tr>
                {driverStatusHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}

              </tr>
            </thead>
            <tbody>
              {driverStatus.map((row) => (
                <tr data-test="DriverStatusRow" key={row.id}>
                  <td>{row.driverid}</td>
                  <td>{row.naem}</td>
                  <td>{row.origin}</td>
                  <td>{row.destintion}</td>
                  <td>{row.tripTime}</td>
                  <td>{row.vehicleNumber}</td>
                  <td>{row.tripStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  ) : (
    <Alert data-test="NoOngoingTrip" color="dark">
      {noOngoingTrips}
    </Alert>
  );
}
DriverStatusUI.propTypes = {
  status5: PropTypes.array,
};
