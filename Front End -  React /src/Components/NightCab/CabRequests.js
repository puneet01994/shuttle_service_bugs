import React, { Component } from "react";
import { connect } from "react-redux";
import { getNightCabRequests } from "../../Redux/actions/GET-API";
import { updateNightCab } from "../../Redux/actions/PUT-API";
import PropTypes from "prop-types";
import "../../Styles/table.css";
import CabRequestUI from "./CabRequestUI";
import logger from "../Pages/Logger";

class CabRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      targetId: "",
      place: null,
      isLoading: true,
      employeeid: "",
      name: "",
      assignedTiming: "",
      assignedRoute: "",
      drivername: "",
      drivercontactNumber: "",
      vehicleNumber: "",
    };
  }

  /**fuction to change the employeeId by selecting a option*/
  handleChange1 = (e) => {
    let selectedOptions = e;
    this.setState({ employeeId: selectedOptions });
  };

  /**fuction to change the destination by selecting a option*/
  handleChange2 = (e) => {
    let selectedOptions = e;
    this.setState({ destination: selectedOptions });
  };

  /**Modal is open */
  addModalopen = () => {
    this.setState({ addModalShow: true });
  };

  /**mount the nightCabRequests componete */
  componentDidMount = () => {
    this.props.getNightCabRequests(this.props.token);
    logger.info("Night cab requests-",this.props.status );

  };

  /**
   * submit function to add cab request details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} employeeId
   *                  @param {string} destination
   *                  @param {string} assignedTiming
   *                  @param {string} driverName
   *                  @param {string} driverContactNumber
   *                  @param {string} vehicleNumber
   *
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      employeeId: this.state.employeeId,
      destination: this.state.destination,
      assignedTiming: this.state.assignedTiming,
      driverName: this.state.driverName,
      driverContactNumber: this.state.driverContactNumber,
      vehicleNumber: this.state.vehicleNumber,
    };
    this.props.updateNightCab(body, this.props.token);
    this.props.getNightCabRequests();
    this.addModalclose();
  };

  /**
   * set the value
   */
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**
   * update the props else return null
   * @param {object} nextProps
   * @param {object} prevState
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status !== prevState.status) {
      return { status: nextProps.status };
    } else return null;
  }

  /**
   *  update the previous state and set it
   * @param {object} prevProps
   *    @param {string} status
   */
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ ...this.props.status, isLoading: false });
    }
  }

  /**Modal is closed */
  addModalclose = () =>
    this.setState({
      addModalShow: true,
    });

  /**check the id and set its value */
  handleCheckChange = (id) => {
    this.setState({
      targetId: id,
    });
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of cabRequestUI
       */
      <CabRequestUI
        data-test="CabRequests"
        addModalShow={this.state.addModalShow}
        addModalclose={this.addModalclose}
        addModalopen={this.addModalopen}
        handleSubmit={this.handleSubmit}
        handleChange1={this.handleChange1}
        handleChange2={this.handleChange2}
        onChange={this.onChange}
        status={this.props.status}
        handleCheckChange={this.handleCheckChange}
        targetId={this.state.targetId}
        enableButton={this.state.enableButton}
        isLoading={this.state.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.nightCabRequests,
    token: state.userReducer.tokken,
    error: state.routeReducer.errorMsg,
  };
}

export default connect(mapStateToProps, {
  updateNightCab,

  getNightCabRequests,
})(CabRequests);

CabRequests.propTypes = {
  isLoading: PropTypes.bool,
  handleEvent: PropTypes.func,
  fileName: PropTypes.string,
  tableName: PropTypes.string,
  handleTableChange: PropTypes.func,
  status: PropTypes.array,
  val: PropTypes.string,
  getNightCabRequests: PropTypes.func,
  token: PropTypes.string,
  updateNightCab: PropTypes.func,
};
