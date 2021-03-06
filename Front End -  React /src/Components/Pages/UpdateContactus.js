import React from "react";

import { clearCurrentTarget } from "../../Redux/actions/DELETE-API";
import { connect } from "react-redux";
import { getContactus } from "../../Redux/actions/GET-API";
import { updateAdminContact } from "../../Redux/actions/PUT-API";
import UpdateContactUI from "./UpdateContactUI.js";
import { areYouSure } from "./Swal";
import PropTypes from "prop-types";
import logger from "./Logger";

class UpdateContactus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.status.name,
      contactNumber: this.props.status.contactNumber,
      emailId: this.props.status.emailId,
      checkConfirm: true,
      isLoading: true,
    };
  }

  /**
   * to set the state
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**
   * submit function to update admin details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {string} name
   *                  @param {string} contactNumber
   *                  @param {string} emailId
   */
  submitHandle = (e) => {
    e.preventDefault();
    const body = {
      name: this.state.name,
      contactNumber: this.state.contactNumber,
      emailId: this.state.emailId,
    };
    areYouSure().then((value) => {
      this.props.updateAdminContact(body, this.props.token) &&
        this.props.history.push("/dashboard/Contactus");
    });
  };

  /**to clear the data after updating the details */
  componentWillUnmount() {
    this.props.clearCurrentTarget();
  }

  /**
   * mount the contactUs component
   */
  componentDidMount = () => {
    this.props.getContactus(this.props.token);
  };

  /**
   * to update and set the previous state
   * @param {object} prevProps
   */
  componentDidUpdate(prevProps) {
    if (
      this.props.status !== undefined &&
      prevProps.status !== this.props.status
    ) {
      this.setState({ ...this.props.status, isLoading: false });
    }
    logger.info("Admin contact Updated-",this.props.status );

  }

  render() {
    /**
     *  @returns {JSX.Element}-rendered component of UpdateContactUsUI
     */
    return (
      <UpdateContactUI
        data-test="UpdateContact"
        UpdateContact={this.state}
        handleChange={this.handleChange}
        submitHandle={this.submitHandle}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.adminContact,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, {
  getContactus,
  updateAdminContact,
  clearCurrentTarget,
})(UpdateContactus);

UpdateContactus.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  token: PropTypes.string,
  history: PropTypes.object,
  clearCurrentTarget: PropTypes.func,
  updateAdminContact: PropTypes.func,
};
