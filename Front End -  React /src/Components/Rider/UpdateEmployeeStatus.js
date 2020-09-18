/* eslint-disable no-lone-blocks */
import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { clearCurrentTarget } from "../../Redux/actions/DELETE-API";
import { getEmpById } from "../../Redux/actions/GET-API";
import { updateEmpDetail } from "../../Redux/actions/PUT-API";

import UpdateEmployeeStatusUI from "./UpdateEmployeeStatusUI";
import { areYouSure } from "../Pages/Swal";
import logger from "../Pages/Logger";

class UpdateEmployeeStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: this.props.status.employeeId,
      name: this.props.status.name,
      accountStatus: this.props.status.accountStatus,
      isLoading: true,
    };
  }

  /**
   * update the previous state
   * @param {object} prevProps
   *  @param {string}  status
   * 
   */
  componentDidUpdate(prevProps) {
    if (
      this.props.status !== undefined &&
      prevProps.status !== this.props.status
    ) {
      this.setState({ ...this.props.status, isLoading: false });
    }
  }

  /**
   * set the state
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**Sets the status to the selected value */
  settingStatus = (e) => {
    this.setState({
      accountStatus: e.target.value,
    });
  };

  /**to set the status according to the value selected*/
  handleOptionChange = (e) => {
    {
      (e.target.value === "ACTVE" || e.target.value === "BLOCK") &&
        this.settingStatus(e);
    }
  };

  /**
   * submit function to update the employee status
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} employeeId
   *                  @param {string} name
   *                  @param {string} gender
   *                  @param {string} accountStatus
   */
  submitHandle = (e) => {
    e.preventDefault();
    const body = {
      employeeId: this.state.employeeId,
      name: this.state.nae,
      accountStatus: this.state.accountStatus,
    };
    
    /**confirmation function before updating the employee status */
    areYouSure().then((value) => {
      this.props.updateEmpDetail(body, this.props.token) &&
        this.props.history.push("/dashboard/EmployeeStatus");
    },    logger.info("Employee acccount status updated", this.props.status)
    );
  };

  /**
   * clear the form data after updating the details
   */
  componentWillUnmount() {
    this.props.clearCurrentTarget();
  }

  /**
   * mount the employee status component
   */
  async componentDidMount() {
    await this.props.getEmpById(this.props.location.state &&
      this.props.location.state.employeeId,
    this.props.token
    );
  }

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of updateEmployeeStatus
       */
      <UpdateEmployeeStatusUI
        data-test="UpdateEmployeeStatusUI"
        empStatus={this.state}
        status={this.props.status}
        submitHandle={this.submitHandle}
        settingStatus={this.settingStatus}
        handleChange={this.handlechange}
        handleOptionChange={this.handleOptionChange}
        isLoading={this.state.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.employeeStatusid,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, {
  getEmpById,
  clearCurrentTarget,
  updateEmpDetail,
})(UpdateEmployeeStatus);

UpdateEmployeeStatus.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  token: PropTypes.string,
  clearCurrentTarget:PropTypes.func,
  updateEmpDetail:PropTypes.func,
  getEmpById:PropTypes.func,
  history:PropTypes.object,
  location:PropTypes.object
};
