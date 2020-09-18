import React from "react";
import PropTypes from "prop-types";

import "../../Styles/table.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "../../Styles/table.css";

import { Card, CardBody, Table } from "reactstrap";

import Loader from "../Pages/Loader";
import { Na } from "../Pages/NotAvailable";
import TableHeader from "../Pages/TableHeader";

import {
  nightCabDetails,
  eid,
  name,
  date,
  destination,
  driverName,
  vehicleNumber,
  driverContactNumber,
  assignedRoute,
  assignedTimings,
} from "../../Constants/constants";

/**
 * cabHistoryUI function to display the history details
 * @param {object} props
 */

export default function CabHistoryUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="NightCabHistory" className="container">
      <h3>{nightCabDetails}</h3>

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
            <Table responsive striped hover id="NightCabTbl">
              <thead>
                <tr>
                  <th>{eid}</th>

                  <th>{name}</th>
                  <th>{date}</th>
                  <th>{destination}</th>

                  <th>{driverName}</th>
                  <th>{vehicleNumber}</th>
                  <th>{driverContactNumber}</th>
                  <th>{assignedRoute}</th>
                  <th>{assignedTimings}</th>
                </tr>
              </thead>
              <tbody>
                {props.status &&
                  props.status.map((row,value) => (
                    <tr data-test="CabHistoryRow" key={value}>
                      <td>{row.employeeId}</td>
                      <td>{row.name}</td>
                      <td>{row.date}</td>
                      <td>{row.destination}</td>

                      <td>{row.driverName}</td>
                      <td>
                        {row.vehicleNumber === null ? (
                          <Na data-test="NA" />
                        ) : (
                          row.vehicleNumber
                        )}
                      </td>
                      <td>
                        {row.driverContactNumber === null ? (
                          <Na data-test="NA" />
                        ) : (
                          row.driverContactNumber
                        )}
                      </td>

                      <td>
                        {row.assignedRoute === null ? (
                          <Na data-test="NA" />
                        ) : (
                          row.assignedRoute
                        )}
                      </td>

                      <td>
                        {row.assignedTiming === null ? (
                          <Na data-test="NA" />
                        ) : (
                          row.assignedTiming
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>2                                
        </Card>
      </div>
    </div>
  );
}

CabHistoryUI.propTypes = {
  isLoading: PropTypes.bool,
  handleEvent: PropTypes.func,
  fileName: PropTypes.string,
  tableName: PropTypes.string,
  handleTableChange: PropTypes.func,
  status: PropTypes.array,
  val: PropTypes.number,
};
