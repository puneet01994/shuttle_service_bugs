import React from "react";
import PropTypes from "prop-types";

import "../../Styles/table.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "../../Styles/table.css";

import { Card, CardBody, Table } from "reactstrap";

import Loader from "../Pages/Loader";
import TableHeader from "../Pages/TableHeader";
import { Link } from "react-router-dom";
import { vehicleStatusDetails, bookingId, date, did, driverName, vehicleNumber, Rid, tripTime, kmsTravelled, totalTripTime } from "../../Constants/constants";

/**
 * to veiw th vehicle status details
 * @param {object} props 
 */
export default function VehicleStatusUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="VehicleStatus" className="container">
      <h3>{vehicleStatusDetails}</h3>

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
            <Table responsive striped hover id="VehicleStatusTbl">
              <thead>
                <tr>
                  <th>{bookingId}</th>
                  <th>{date}</th>
                  <th>{did}</th>
                  <th>{driverName}</th>
                  <th>{vehicleNumber}</th>
                  <th>{Rid}</th>
                  <th>{tripTime}</th>
                  <th>{kmsTravelled}</th>

                  <th>{totalTripTime}</th>
                </tr>
              </thead>
              <tbody>
                {props.status &&
                  props.status.map((row) => (
                    <tr data-test="vehicleStatusRow" key>
                      <td>
                        <Link
                          to={{
                            pathname: `/dashboard/VehicleStatus/${row.bookingId}`,
                            state: { bookingId: row.bookingId },
                          }}
                        >
                          {row.bookingId}
                        </Link>
                      </td>
                      <td>{row.date}</td>
                      <td>{row.driverId}</td>
                      <td>{row.name}</td>
                      <td>{row.vehicleNumber}</td>
                      <td>{row.routeId}</td>
                      <td>{row.tripTime}</td>

                      <td>{row.kmsTravelled}</td>

                      <td>{row.totalTripTime}</td>
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

VehicleStatusUI.propTypes = {
  isLoading: PropTypes.bool,
  handleEvent: PropTypes.func,
  handleTableChange: PropTypes.func,
  tableName: PropTypes.string,
  fileName: PropTypes.string,
  status: PropTypes.array,
  val: PropTypes.number,
};
