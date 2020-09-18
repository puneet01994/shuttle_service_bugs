import React from "react";
import filterdate from "../../Assets/filterdate.png";
import PropTypes from "prop-types";

import DateRangePicker from "react-bootstrap-daterangepicker";
import "../../Styles/table.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import {
  PageSizeDropDown,
  SortByCabHistory,
  SortByCabVehicleStatus,
  SortByTrips,
  SortByDri,
  SortByEmp,
  SortByEmpStatus,
  SortByVehicleInfo,
  SortByVehicleRoute,
} from "../Pages/DropDown";
import {
  PrevButton,
  NextButton,
  PageValue,
  ExportButton,
  AddButton,
} from "../Pages/Buttons";
import "../../Styles/table.css";

import { Col, Row, CardHeader } from "reactstrap";
import ErrorBoundary from "./ErrorBoundary";

/**
 * to dispaly the table header on every page
 * DateRangePicker to select the date
 * AddButton to add new entry
 * ExportButton to export data to the excelsheet
 * PageDropDown to select the range of data to display
 * Sort option to sort data according to value given
 * previous and next button to change the pages
 * @param {object} props
 */
export default function TableHeader(props) {
  return (
    <CardHeader data-test="tableHeader">
      <Row>
        <Col style={{ maxHeight: "40px", maxWidth: "40px" }}>
          {props.tableName ? (
            <DateRangePicker onApply={props.handleEvent}>
              <input
                type="image"
                value="filterdate"
                className="icon"
                id="filterdate"
                alt="filterdate"
                src={filterdate}
              />
            </DateRangePicker>
          ) : props.empStatus ? null : (
            <ErrorBoundary>
              {" "}
              <AddButton addModalopen={props.addModalopen} />
            </ErrorBoundary>
          )}
          {props.empStatus && null}
        </Col>
        <Col>
          {props.fileName && (
            
            <ExportButton
              tableName={props.tableName}
              fileName={props.fileName}
            />
          )}
        </Col>
        <Col>
          {props.vehRoute && (
            <input
              type="button"
              className="button1"
              value="Assign"
              onClick={props.addModalopen1}
            />
          )}{" "}
        </Col>
        <Col style={{ marginLeft: "200px" }}>
          <PageSizeDropDown handleTableChange={props.handleTableChange} />
          &nbsp;&nbsp;&nbsp;{" "}
          {props.tableName === "NightCabTbl" && (
            <SortByCabHistory handleTableChange={props.handleTableChange} />
          )}
          {props.tableName === "VehicleStatusTbl" && (
            <SortByCabVehicleStatus
              handleTableChange={props.handleTableChange}
            />
          )}
          {props.tableName === "TripTbl" && (
            <SortByTrips handleTableChange={props.handleTableChange} />
          )}
          {props.title === "Add Driver" && (
            <SortByDri handleTableChange={props.handleTableChange} />
          )}
          {props.title === "Add Employee" && (
            <SortByEmp handleTableChange={props.handleTableChange} />
          )}
          {props.empStatus === "empStatus" && (
            <SortByEmpStatus handleTableChange={props.handleTableChange} />
          )}
          {props.vehicleInfo === "vehicleInfo" && (
            <SortByVehicleInfo handleTableChange={props.handleTableChange} />
          )}
          {props.vehRoute === "vehRoute" && (
            <SortByVehicleRoute handleTableChange={props.handleTableChange} />
          )}
        </Col>
        <Col style={{ maxHeight: "40px", maxWidth: "40px" }}>
          <ErrorBoundary>
          <PrevButton handleTableChange={props.handleTableChange} />
        </ErrorBoundary>
        </Col>
        <Col style={{ maxHeight: "40px", maxWidth: "40px" }}>
          <PageValue val={props.val} />
        </Col>
        <Col style={{ maxHeight: "40px", maxWidth: "40px" }}>
          <NextButton handleTableChange={props.handleTableChange} />
        </Col>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Row>
    </CardHeader>
  );
}

TableHeader.propTypes = {
  tableName: PropTypes.string,
  handleEvent: PropTypes.func,
  addModalopen: PropTypes.func,
  empStatus: PropTypes.string,
  fileName: PropTypes.string,
  title: PropTypes.string,
  vehRoute: PropTypes.object,
  addModalopen1: PropTypes.func,
  handleTableChange: PropTypes.func,
  val: PropTypes.number,
  vehicleInfo: PropTypes.string,
};
