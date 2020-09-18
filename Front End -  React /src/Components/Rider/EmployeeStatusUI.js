import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardBody, Table } from "reactstrap";
import "../../Styles/table.css";

import { EditButton } from "../Pages/Buttons";

import Loader from "../Pages/Loader";
import TableHeader from "../Pages/TableHeader";
import { employeeStatus, eid, name, status } from "../../Constants/constants";

/**
 * EmployeeStatusUI function to dispaly the employee status
 * @param {object} props
 */
export default function EmployeeStatusUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="EmployeeStatus" className="container">
      <h3>{employeeStatus}</h3>

      <div className="BigTbl">
        <Card>
          <TableHeader
            empStatus={props.empStatus}
            handleTableChange={props.handleTableChange}
            onChange={props.handleTableChange}
            val={props.val}
          />

          <CardBody>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>{eid}</th>
                  <th>{name}</th>
                  <th>{status}</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.status1 &&
                  props.status1.map((row) => (
                    <tr
                      data-test="empStatusRow"
                      key={row.employeeId}
                      onClick={(e) => props.handleCheckChange(row.employeeId)}
                    >
                      <td>{row.employeeId}</td>
                      <td>{row.name}</td>
                      <td>{row.accountStatus}</td>

                      <td>
                        {row.employeeId === props.targetId && (
                          <div data-test="editButton">
                            <Link
                              to={{
                                pathname:
                                  "/dashboard/EmployeeStatus/UpdateEmployeeStatus",
                                state: { employeeId: row.employeeId },
                              }}
                            >
                              <EditButton />
                            </Link>
                          </div>
                        )}{" "}
                      </td>
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

EmployeeStatusUI.propTypes = {
  isLoading: PropTypes.bool,
  status1: PropTypes.array,
  handleCheckChange: PropTypes.func,
  targetId: PropTypes.string,
  enableButton: PropTypes.bool,
  empStatus: PropTypes.string,
  handleTableChange: PropTypes.func,
  val: PropTypes.number,
};
