import React, { Component } from "react";
import TripsUI from "./TripsUI";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTripByDate } from "../../Redux/actions/GET-API";
import logger from "../Pages/Logger";

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date1: null,
      Date2: null,
      show: true,
      pageSize: "",
      val: 0,
      sortBy: "",
      isLoading: true,
      tableName: "TripTbl",
      fileName: "TripInfo",
    };
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
        this.props.getTripByDate(
          this.state.Date1,
          this.state.Date2,
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (
      e.target.value === "employeeId" ||
      e.target.value === "vehicleNumber" ||
      e.target.value === "tripTime" ||
      e.target.value === "date" ||
      e.target.value === "name"
    ) {
      this.setState({ sortBy: e.target.value }, () =>
        this.props.getTripByDate(
          this.state.Date1,
          this.state.Date2,
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.id === "next") {
      if (this.state.val < limit + 1) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getTripByDate(
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
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getTripByDate(
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
  * update the props
  * @param {object} nextProps 
  * @param {object} prevState 
  */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status !== prevState.status) {
      return { status1: nextProps.status };
    }
  }

  /**
   * update and set the props
   * @param {object} prevProps 
   * @param {object} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ ...this.props.status, isLoading: false });
    }
  }
  /**
   * mount the component
   */
  componentDidMount = () => {
    this.props.getTripByDate(
      this.state.Date1,
      this.state.Date2,
      this.props.token
    );
    logger.info("Trips data-",this.props.status );

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
   * select the date
   */
  handleEvent = (event, picker) => {
    this.setState(
      {
        Date1: this.convert(picker.startDate._d),
        Date2: this.convert(picker.endDate._d),
      }
    );
    this.props.getTripByDate(
      this.state.Date1,
      this.state.Date2,
      this.props.token,
      this.state.sortBy,
      this.state.val,
      this.state.pageSize
    );
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of TripsUI
       */
      <TripsUI
        data-test="Trips"
        status={this.props.status}
        val={this.state.val}
        show={this.state.show}
        handleTableChange={this.handleTableChange}
        handleEvent={this.handleEvent}
        isLoading={this.state.isLoading}
        tableName={this.state.tableName}
        fileName={this.state.fileName}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.tripReducer.TripsDetails,
    totalPages: state.tripReducer.totalPages,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, { getTripByDate })(Trips);

Trips.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.array,
  getTripByDate: PropTypes.func,
  totalPages: PropTypes.string,

  token: PropTypes.string,
};
