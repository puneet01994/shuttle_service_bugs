import React from "react";

import { clearCurrentTarget } from "../../Redux/actions/DELETE-API";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getNightCabById } from "../../Redux/actions/POST-API";
import { updateNightCabById } from "../../Redux/actions/PUT-API";
import UpdateCabRequestUI from "./UpdateCabRequestUI";
import swal from "sweetalert";
import logger from "../Pages/Logger";


class UpdateCabRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.status.name,
      employeeId: this.props.status.employeeId,
      driverName: this.props.status.driverName,
      driverContactNumber: this.props.status.driverContactNumber,
      vehicleNumber: this.props.status.vehicleNumber,
      destination: this.props.status.destination,
      assignedRoutes: this.props.status.assignedRoutes,
      assignedTiming: this.props.status.assignedTiming,
      isLoading: true,
    };
  }

  /**to change the value and set the state */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**
   * submit function to update cab request details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} employeeId
   *                  @param {string} name
   *                  @param {string} destination
   *                  @param {string} driverName
   *                  @param {string} driverContactNumber
   *                  @param {string} vehicleNumber
   *                  @param {string} assignedTiming
   *                  @param {string} assignedRoutes
   *
   */
  submitHandle = (e) => {
    e.preventDefault();
    const body = {
      employeeId: this.state.employeeId,
      name: this.state.name,
      destination: this.state.destination,
      driverName: this.state.driverName,
      driverContactNumber: this.state.driverContactNumber,
      vehicleNumber: this.state.vehicleNumber,
      assignedTiming: this.state.assignedTiming,
      assignedRoutes: this.state.assignedRoutes,
    };
    logger.info("Assigned cab-",body );

    /**confirmation function before updating the cab request details */
    swal({
      title: "Are you sure?",
      icon: "info",
      buttons: false,
    }).then((value) => {
      this.props.updateNightCabById(body, this.props.token) &&
        this.props.history.push("/dashboard/CabRequests");
    });
  };

  /**
   * to clear the form details after updating the data.
   */
  componentWillUnmount() {
    this.props.clearCurrentTarget();
  }

  /**
   * to mount the component
   */
  async componentDidMount() {
    this.setState({ shouldBlockNavigation: true });
    await this.props.getNightCabById(this.props.location.state &&
      this.props.location.state.employeeId,
    this.props.token
    );
  }

  /**
   * to update and set theprevious state
   * @param {object} prevProps 
   */
  componentDidUpdate(prevProps) {
    if (
      this.props.status !== undefined &&
      prevProps.status !== this.props.status
    ) {
      this.setState({ ...this.props.status, isLoading: false });
    }
    logger.info("Updated cab requests-",this.props.status );

  }

  /**fuction to change the assignedRoutes by selecting a option*/
  handleChange1 = (e) => {
    let selectedOptions = e;

    this.setState({ assignedRoutes: selectedOptions });
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of UpdateCabRequestUI
       */
      <UpdateCabRequestUI
        data-test="UpdateCabRequests"
        UpdateCab={this.state}
        status={this.props.status}
        submitHandle={this.submitHandle}
        handleChange={this.handleChange}
        isLoading={this.state.isLoading}
        handleChange1={this.handleChange1}
        status1={this.props.status1}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.nightCabRequestsById,
    token: state.userReducer.tokken,
    status1: state.getReducer.nightCabRequests,
  };
}

export default connect(mapStateToProps, {
  getNightCabById,
  updateNightCabById,
  clearCurrentTarget,
})(UpdateCabRequest);

UpdateCabRequest.propTypes = {
  isLoading: PropTypes.bool,
  status: PropTypes.object,
  addModalopen: PropTypes.func,
  addModalShow: PropTypes.func,
  addModalclose: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleChange1: PropTypes.func,
  handleChange2: PropTypes.func,
  onChange: PropTypes.func,
  handleCheckChange: PropTypes.func,
  targetId: PropTypes.string,
  updateNightCabById:PropTypes.func,
  token:PropTypes.string,
  history:PropTypes.object,
  clearCurrentTarget:PropTypes.func,
  getNightCabById:PropTypes.func,
  location:PropTypes.object,
  status1:PropTypes.array
};
