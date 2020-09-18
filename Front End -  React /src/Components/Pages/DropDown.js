import React from "react";
import PropTypes from "prop-types";
import {
  sortBy,
  empId,
  did,
  Rid,
  date,
  vehicleNumber,
  tripTime,
  name,
  eid,
  accountStatus,
  vehicleModel,
  seats,
  id,
  pageSize,
} from "../../Constants/constants";

/**
 * PageSizeDropDown to display the dropdown details
 * @param {object} props
 */
export const PageSizeDropDown = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option data-test="options" value="Default"  disabled hidden>
        {pageSize}
      </option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
  );
};

/**
 * SortByCabHistory function to sort the table data by employeeId
 * @param {object} props
 */
export const SortByCabHistory = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option value="Default" disabled hidden>
        {sortBy}
      </option>
      <option value="employeeId">{empId}</option>
    </select>
  );
};

/**
 * SortByCabVehicleStatus function to sort according to the value provided
 * @param {object} props
 */

export const SortByCabVehicleStatus = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option value="Default" disabled hidden>
        Sort By
      </option>
      <option value="driverId">{did}</option>
      <option value="routeId">{Rid}</option>
      <option value="date">{date}</option>
      <option value="vehicleNumber">{vehicleNumber}</option>
    </select>
  );
};

/**
 * SortBytrips function to sort according to the value provided
 * @param {object} props
 */
export const SortByTrips = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option value="Default" disabled hidden>
        {sortBy}
      </option>
      <option value="employeeId">{empId}</option>
      <option value="vehicleNumber">{vehicleNumber}</option>
      <option value="tripTime">{tripTime}</option>
      <option value="date">{date}</option>
      <option value="name">{name}</option>
    </select>
  );
};

/**
 * SortByEmp function to sort the data bye value given
 * @param {object} props
 */

export const SortByEmp = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option value="Default" disabled hidden>
        {sortBy}
      </option>
      <option value="id">{eid}</option>
      <option value="name">{name}</option>
    </select>
  );
};

/**
 * SortByDri function to sort data by value given
 * @param {object} props
 */
export const SortByDri = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      value="Default"
      onChange={props.handleTableChange}
    >
      <option value="Default" disabled hidden>
        {sortBy}
      </option>
      <option value="id">{did}</option>
      <option value="name">{name}</option>
    </select>
  );
};

/**
 * SortByEmpStatus function to sort data by value given
 * @param {object} props
 */
export const SortByEmpStatus = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option value="Default"  disabled hidden>
        {sortBy}
      </option>
      <option value="id">{id}</option>
      <option value="name">{name}</option>
      <option value="accountStatus">{accountStatus}</option>
    </select>
  );
};

/**
 * SortByVehicleInfo function to sort data by value given
 * @param {object} props
 */
export const SortByVehicleInfo = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}SortByTrips
      value="Default"
    >
      <option value="Default" disabled hidden>
        {sortBy}
      </option>
      <option value="vehicleNumber">{id}</option>
      <option value="vehicleModel">{vehicleModel}</option>
      <option value="seats">{seats}</option>
    </select>
  );
};

/**
 * SortByVehicleRoute function to sort data by value given
 * @param {object} props
 */
export const SortByVehicleRoute = (props) => {
  return (
    <select
      data-test="dropDownComponent"
      className="dropdown"
      onChange={props.handleTableChange}
      value="Default"
    >
      <option value="Default" disabled hidden>
        {sortBy}
      </option>
      <option value="id">{id}</option>
      <option value="vehicleNumber">{vehicleNumber}</option>
      <option value="routeId">{Rid}</option>
    </select>
  );
};

PageSizeDropDown.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByCabVehicleStatus.propTypes = {
  handleTableChange: PropTypes.func,
};
PageSizeDropDown.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByDri.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByVehicleInfo.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByEmp.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByEmpStatus.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByVehicleRoute.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByCabHistory.propTypes = {
  handleTableChange: PropTypes.func,
};
SortByTrips.propTypes = {
  handleTableChange: PropTypes.func,
};
