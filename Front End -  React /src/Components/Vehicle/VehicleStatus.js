import React, { Component } from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import "../../Styles/table.css";

import { connect } from "react-redux";

import { getStatusByDate } from "../../Redux/actions/GET-API";
import VehiceStatusUI from "./VehicleStatusUI";

class VehicleStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Date1: null,
      Date2: null,
      pageSize: "",
      val: 0,
      sortBy: "",
      click: true,
      enable: false,
      isLoading: true,
      tableName: "VehicleStatusTbl",
      fileName: "VehicleStatusInfo",
    };
  }
/**
 * mount the component
 */
  componentDidMount = () => {
    this.props.getStatusByDate(
      this.state.Date1,
      this.state.Date2,
      this.props.token
    );
  };
  /**
   * update the props
   * @param {object} nextProps 
   * @param {object} prevState 
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status !== prevState.status) {
      return { status: nextProps.status };
    } else return null;
  }
/**
 * to update and set the state
 * @param {object} prevProps 
 * @param {object} prevState 
 */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ ...this.props.status, isLoading: false });
    }
  }

  /**to sort the table data according to the values passed
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} Date1
   *                  @param {string} Date2
   *                  @param {srting} sortBy
   *                  @param {string} val
   *                  @param {string} pageSize
   */
  handleTableChange = (e) => {
    let limit = this.props.totalPages;
    if (
      e.target.value === "20" ||
      e.target.value === "30" ||
      e.target.value === "40" ||
      e.target.value === "50"
    ) {
      this.setState({ pageSize: e.target.value, val: 0 }, () =>
        this.props.getStatusByDate(
          this.state.Date1,
          this.state.Date2,
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (
      e.target.value === "vehicleNumber" ||
      e.target.value === "date" ||
      e.target.value === "routeId" ||
      e.target.value === "driverId"
    ) {
      this.setState({ sortBy: e.target.value }, () =>
        this.props.getStatusByDate(
          this.state.Date1,
          this.state.Date2,
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.id === "next") {
      if (this.state.val < limit - 1) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getStatusByDate(
            this.state.Date1,
            this.state.Date2,
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    } else if (e.target.id === "prev") {
      if (this.state.val > 0) {
        this.setState({ val: this.state.val - 1 }, () => {
          this.props.getStatusByDate(
            this.state.Date1,
            this.state.Date2,
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    }
  };


  /**
   * convet the date to string
   */
  convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  /**
   * to select the date range
   */
  handleEvent = (event, picker) => {
    this.setState(
      {
        Date1: this.convert(picker.startDate._d).substring(0, 10),
        Date2: this.convert(picker.endDate._d).substring(0, 10),
        pageSize: "",
        val: 0,
        sortBy: "",
      },
      () => {
        this.props.getStatusByDate(
          this.state.Date1,
          this.state.Date2,
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        );
      }
    );
  };
  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of VehiceStatusUI
       */
      <VehiceStatusUI
        data-test="VehicleStatus"
        tableName={this.state.tableName}
        fileName={this.state.filename}
        handleTableChange={this.handleTablChange}
        handleEvent={this.handleEvent}
        status={this.props.status}
        val={this.state.val}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.vehicleReducer.Vehicle_status,
    totalPages: state.vehicleReducer.totalPages,
    token: state.userReducer.tokken,
    error: state.vehicleReducer.errorMsg,
  };
}

export default connect(mapStateToProps, { getStatusByDate })(VehicleStatus);

VehicleStatus.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.array,
  token: PropTypes.string,
  getStatusByDate: PropTypes.func,
  totalPages: PropTypes.string,
};
