/* eslint-disable no-lone-blocks */
import React from "react";
import { connect } from "react-redux";
import { areYouSure } from "../../Components/Pages/Swal";
import { clearCurrentTarget } from "../../Redux/actions/DELETE-API";
import { getDriverById } from "../../Redux/actions/GET-API";
import { updateDriverDetail } from "../../Redux/actions/PUT-API";
import UpdateDriverUI from "./UpdateDriverUI";
import PropTypes from "prop-types";
import logger from "../Pages/Logger";



class UpdateDriver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.status.name,
      gender: this.props.status.gender,
      contactNumber: this.props.status.contactNumber,
      emailId: this.props.status.emailid,
      id: this.props.status.id,
      managerId: this.props.status.managerid,
      redirect: false,
      checkConfirm: true,
      isLoading: true,
    };
  }

  /**set  the form values  after editing */
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
      (e.target.value === "MAEL" || e.target.value === "FEMLE") &&
        this.settingGender(e);
    }
  };

  /**
   * submit function to update the driver details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object}  -- item consists of the followings-
   *                  @param {srting} id
   *                  @param {string} name
   *                  @param {string} gender
   *                  @param {string} contactNumber
   *                  @param {string} emailId
   *                  @param {string} role
   */ 
  submitHandle = (e) => {
    e.preventDefault();
    const body = {
      id: this.state.id,
      name: this.state.name,
      gender: this.state.gendar,
      contactNumber: this.state.contactNumbar,
      emailId: this.state.emailId,
      managerId: this.state.managerId,
      redirect: true,
      shouldBlockNavigation: false,
      role: "DRIVER",
    };
    /**confirmation function before updating the driver details */
    areYouSure().then((value) => {
      this.props.updateDriverDetail(body) &&
        this.props.history.push("/dashboard/Driver");
    });
  };

  /**
   * to clear the form data after updating.
   */
  componentWillUnmount() {
    this.props.clearCurrentTarget();
  }

  /**
   * to render the data from driver and set the state.
   */
  async componentDidMount() {
    this.setState({ shouldBlockNavigation: true });
    await this.props.getDriverById(this.props.location.state &&
      this.props.location.state.id,
    this.props.token
    );
    logger.info("Individual Driver data", this.props.status);

  }

  /**
   * to update and the set the state
   * @param {object} prevProps 
   *   @param {string} status
   *    @param {boolean} isLoading
   */
  componentDidUpdate(prevProps) {
    if (
      this.props.status !== undefined &&
      prevProps.status !== this.props.status
    ) {
      this.setState({ ...this.props.status, isLoading: false });
    }
    logger.info("Updated driver data-",this.props.status );

  }

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of driverUpdateUI
       */
      <UpdateDriverUI
        data-test="updateDriver"
        UpdateDriver={this.state}
        submitHandle={this.submitHandle}
        handleChange={this.handleChange}
        handleOptionChange={this.handleOptionChange}
        settingGender={this.settingGender}
        isLoading={this.state.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.driverid,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, {
  getDriverById,
  updateDriverDetail,
  clearCurrentTarget,
})(UpdateDriver);

UpdateDriver.propTypes = {
  status: PropTypes.object,
  updateDriverDetail: PropTypes.func,
  history: PropTypes.object,
  clearCurrentTarget: PropTypes.func,
  token: PropTypes.string,
  getDriverById: PropTypes.func,
  location: PropTypes.object,
};
