import React, { Component } from "react";
import { connect } from "react-redux";
import { getContactus } from "../../Redux/actions/GET-API";
import PropTypes from "prop-types";

import ContactusUI from "./ContactusUI";
import logger from "./Logger";

class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      enableButton: false,
      targetId: "",
      place: null,
      isLoading: true,
    };
  }

  /**
   * mount th contactus component
   */
  componentDidMount() {
    this.props.getContactus(this.props.token);
    logger.info("Admin data-",this.props.status);

  }

  /**
   * to update the props
   * @param {object} nextProps 
   * @param {object} prevState 
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status !== prevState.status) {
      return { status: nextProps.status };
    } else return null;
  }

  /**
   * update the previous props and set the state
   * @param {object} prevProps 
   */
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ ...this.props.status, isLoading: false });
    }
  }

  /**
   * check the value and set the state
   */
  handleCheckChange = (id) => {
    this.setState({
      targetId: id,
    });
  };

  render() {
    /**
       *  @returns {JSX.Element}-rendered component of ContactUsUI
       */
    return (
      <ContactusUI
        data-test="Contactus"
        status={this.props.status}
        handleCheckChange={this.handleCheckChange}
        targetId={this.state.targetId}
        isLoading={this.state.isLoading}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    status: state.getReducer.adminContact,
    token: state.userReducer.tokken,
    error: state.routeReducer.errorMsg,
  };
}

export default connect(mapStateToProps, { getContactus })(Contactus);

Contactus.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  token: PropTypes.string,
};
