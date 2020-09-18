/* eslint-disable no-lone-blocks */
import React from "react";
import { connect } from "react-redux";
import { clearCurrentTarget } from "../../Redux/actions/DELETE-API";
import { getRiderById } from "../../Redux/actions/GET-API";
import { updateRiderDetail } from "../../Redux/actions/PUT-API";
import UpdateRiderUI from "./UpdateRiderUI";
import "../../Styles/table.css";
import { areYouSure } from "../Pages/Swal";
import PropTypes from "prop-types";
import logger from "../Pages/Logger";

class Updaterider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.status.id,
      name: this.props.status.name,
      gender: this.props.status.gender,
      contactNumber: this.props.status.contactNumber,
      emailId: this.props.status.emailId,
      managerId: this.props.status.managerId,
      redirect: false,
      isLoading: true,
      role: "EMPLOYEE",
    };
  }

  /**
   * set the state
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**Sets the gender to the selected value */
  settingGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  /**to set the gender according to the value selected*/
  handleOptionChange = (e) => {
    {
      (e.target.value === "MALE" || e.target.value === "FEMALE") &&
        this.settingGender(e);
    }
  };

  /**
   * submit function to add new employee details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} id
   *                  @param {string} name
   *                  @param {string} gender
   *                  @param {string} contactNumber
   *                  @param {string} emailId
   *                  @param {string} managerId
   *                  @param {string} role
   */
  submitHandle = (e) => {
    e.preventDefault();
    const body = {
      name: this.state.name,
      gender: this.state.gender,
      contactNumber: this.state.contactNumber,
      emailId: this.state.emailId,
      managerId: this.state.managerId,
      role: "EMPLOYEE",
    };
    /**confirmation function before updating the employee details */
    areYouSure().then((value) => {
      this.props.updateRiderDetail(body) &&
        this.props.history.push("/dashboard/Rider");
    });
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
   * update and set the props
   * @param {object} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ ...this.props.status, isLoading: false });
    }
    logger.info("Updated rider data-", this.props.status);
  }

  /**
   * clear the form after updating the data
   */
  componentWillUnmount() {
    this.props.clearCurrentTarget();
  }

  /**
   * mount the rider component
   */
  async componentDidMount() {
    await this.props.getRiderById(
      this.props.location.state && this.props.location.state.id,
      this.props.token
    );
    logger.info("Individual Rider data", this.props.status);
  }

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of riderUpdateUI
       */
      <UpdateRiderUI
        data-test="UpdateRider"
        updateRider={this.state}
        status={this.props.status}
        settingGender={this.settingGender}
        handleOptionChange={this.handleOptionChange}
        handleChange={this.handleChange}
        submitHandle={this.submitHandle}
        isLoading={this.state.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.riderid,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, {
  getRiderById,
  clearCurrentTarget,
  updateRiderDetail,
})(Updaterider);

Updaterider.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  updateRiderDetail: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  token: PropTypes.string,
  clearCurrentTarget: PropTypes.func,
  getRiderById: PropTypes.func,
};
