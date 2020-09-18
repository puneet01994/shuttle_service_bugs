import React from "react";
import "../../Styles/table.css";
import { Col, Row, Table, Alert } from "reactstrap";
import PropTypes from "prop-types";

import {

  noUpcomingTrips,
  employeeStatusHeaders,
} from "../../Constants/constants";

/**
 * StatusTableUI function to display the employee status travelling on that day.
 * TableUI displays the data.
 * @param {object} props
 *    @param {string} status
 */
export default function StatusTableUI({ bookingStatus }) {
  return bookingStatus.length > 0 ? (
    <div data-test="employeeStatus" className="BigTbl">
      <Row>
        <Col>
          <Table responsive striped hover>
            <thead>
              <tr>
                {employeeStatusHeaders.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bookingStatus.map((row, index) => (
                <tr data-test="EmpStatusRow" key={index}>
                  <td>{row.employeeId}</td>
                  <td>{row.name}</td>
                  <td>{row.origin}</td>
                  <td>{row.destination}</td>
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
    <Alert data-test="NoUpcomingTrip" color="dark">
      {noUpcomingTrips}
    </Alert>
  );
}

StatusTableUI.propTypes = {
  status4: PropTypes.array,
};
