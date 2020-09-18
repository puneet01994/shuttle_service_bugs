import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Card, CardBody, Table } from "reactstrap";
import ModalForm from "./ModalForm";
import Loader from "../Pages/Loader";
import { EditButton, DeleteButton } from "../Pages/Buttons";
import "../../Styles/table.css";
import TableHeader from "../Pages/TableHeader";

import {
  driverDetails,
  email,
  mobileNumber,
  gender,
  view,
  name,
  did,
} from "../../Constants/constants";

/**
 * DriverUI function to display th driver data in tabular form
 * and option to edit and delete driver.
 * TableHeader consist of options to add new driver,pagination and
 * sort options according to id and name.
 * ModalForm is pop-up form to add new driver.
 * @param {object} props
 *    @param {bool} isLoading
 */

export default function DriverUI(props) {
  return props.isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="DriverTable" className="container">
      <h3 data-test="DriverTable">{driverDetails}</h3>

      <div className="BigTbl">
        <Card>
          <TableHeader
            addModalopen={props.addModalopen}
            handleTableChange={props.handleTableChange}
            onChange={props.handleTableChange}
            val={props.value}
            title={props.title}
          />

          <CardBody>
            <Table responsive striped hover>
              <thead>
                <tr>
                  <th>{did}</th>
                  <th>{name}</th>
                  <th>{email}</th>
                  <th>{mobileNumber}</th>
                  <th>{gender}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.status1 &&
                  props.status1.map((row) => (
                    <tr
                      data-test="driverRow"
                      key={row.id}
                      onClick={() => props.handleCheckChange(row.id)}
                    >
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.emailId}</td>
                      <td>{row.contactNumber}</td>
                      <td>{row.gender}</td>
                      <td>
                        {" "}
                        {row.id === props.targetId && (
                          <DeleteButton
                            data-test="deleteButton"
                            delete={props.delete}
                            targetId={props.targetId}
                          />
                        )}{" "}
                        {row.id === props.targetId && (
                          <Link
                            to={{
                              pathname: "/dashboard/Driver/Updatedriver",
                              state: { id: props.targetId },
                            }}
                          >
                            <EditButton />
                          </Link>
                        )}{" "}
                        {row.id === props.targetId && (
                          <>
                            <Link
                              to={{
                                pathname: `/dashboard/Updatedriver/${props.targetId}`,
                                state: { id: props.targetId },
                              }}
                            >
                              <h5>{view}</h5>
                            </Link>
                          </>
                        )}{" "}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
      <ModalForm
        data-test="modalForm"
        addModalShow={props.addModalShow}
        addModalclose={props.addModalclose}
        handleSubmit={props.handleSubmit}
        gender={props.gender}
        handleChange={props.handleChange}
        handleOptionChange={props.handleOptionChange}
        title={props.title}
        label={props.label}
      />
    </div>
  );
}

DriverUI.propTypes = {
  isLoading: PropTypes.bool,
  addModalShow: PropTypes.bool,
  addModalopen: PropTypes.func,
  handleTableChange: PropTypes.func,
  handleCheckChange: PropTypes.func,
  addModalclose: PropTypes.func,
  handleSubmit: PropTypes.func,
  gender: PropTypes.string,
  handleChange: PropTypes.func,
  delete: PropTypes.func,
  title: PropTypes.string,
  targetId: PropTypes.string,
  handleOptionChange: PropTypes.func,
  label: PropTypes.string,
  val: PropTypes.number,
  status1: PropTypes.array,
};
