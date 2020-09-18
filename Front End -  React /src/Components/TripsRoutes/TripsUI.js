import React from "react";
import PropTypes from "prop-types";
import "../../Styles/table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Card, CardBody, Table } from "reactstrap";
import Loader from "../Pages/Loader";
import TableHeader from "../Pages/TableHeader";
import { tripDetails, tripId, empId, name, vehicleNumber, tripTime, date, origin, destination, status } from "../../Constants/constants";

/**
 * display the TripsUi details
 * @param {object} props 
 */
export default function TripsUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="Trips" className="container">
      <h3>{tripDetails}</h3>

      <div className="BigTbl">
        <Card>
          <TableHeader
            handleEvent={props.handleEvent}
            tableName={props.tableName}
            fileName={props.fileName}
            handleTableChange={props.handleTableChange}
            onChange={props.handleTableChange}
            val={props.val}
          />

          <CardBody>
            <Table responsive striped hover small id="TripTbl">
              <thead>
                <tr>
                  <th>{tripId}</th>
                  <th>{empId}</th>
                  <th>{name}</th>
                  <th>{vehicleNumber}</th>
                  <th>{tripTime}</th>
                  <th>{date}</th>

                  <th>{origin}</th>
                  <th>{destination}</th>
                  <th>{status}</th>
                </tr>
              </thead>
              <tbody>
                {props.status &&
                  props.status.map((row) => (
                    <tr data-test="tripRoutesRow" key>
                      <td>{row.tripId}</td>
                      <td>{row.employeeId}</td>
                      <td>{row.name}</td>
                      <td>{row.vehicleNumber}</td>
                      <td>{row.tripTime}</td>
                      <td>{row.date}</td>
                      <td>{row.origin}</td>
                      <td>{row.destination}</td>
                      <td>{row.tripStatus}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

TripsUI.propTypes = {
  isLoading: PropTypes.bool,
  value: PropTypes.string,
  status: PropTypes.array,
  handleEvent: PropTypes.func,
  handleTableChange: PropTypes.func,
  tableName: PropTypes.string,
  fileName: PropTypes.string,
  val: PropTypes.number,
};
