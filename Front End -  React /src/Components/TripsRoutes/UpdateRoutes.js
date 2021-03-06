import React from "react";

import { updateRouteDetail } from "../../Redux/actions/PUT-API";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getRouteById } from "../../Redux/actions/GET-API";

import { clearCurrentTarget } from "../../Redux/actions/DELETE-API";

import UpdateRoutesUI from "./UpdateRoutesUI";
import { areYouSure } from "../Pages/Swal";
import logger from "../Pages/Logger";

class Updateroutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeId: this.props.status.routeId,
      route: this.props.status.route,
      routeTimings: this.props.status.routeTimings,
      isLoading: true,
    };
  }

  /**
   * to set the value
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**update routes by selecting the options */
  handleSelect = (e) => {
    let selectedOptions = e;
    this.setState({ route: selectedOptions });
  };

  /**
   * submit function to update route
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} routeId
   *                  @param {string} route
   *                  @param {string} routeTimings
   */
  submitHandle = (e) => {
    e.preventDefault();
    const body = {
      routeId: this.state.routeId,
      route: this.state.route,
      routeTimings: this.state.routeTimings,
    };
    /**confirmation function before updating the route details */
    areYouSure().then((value) => {
      this.props.updateRouteDetail(body, this.props.token) &&
        this.props.history.push("/dashboard/Routes");
    });
  };

  /**
   * clear the form after updating the deatils
   */
  componentWillUnmount() {
    this.props.clearCurrentTarget();
  }
  /**
   * update and set the state
   * @param {object} prevProps 
   */
  componentDidUpdate(prevProps) {
    if (
      this.props.status !== undefined &&
      prevProps.status !== this.props.status
    ) {
      this.setState({ ...this.props.status, isLoading: false });
    }
    logger.info("Routes updated-",this.props.status );

  }

  /**
   * mount the component
   */
  async componentDidMount() {
    await this.props.getRouteById(this.props.location.state &&
      this.props.location.state.routeId,
    this.props.token
    );
    logger.info("Individual Route data-",this.props.status );

  }
  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of UpdateRoutesUI
       */
      <UpdateRoutesUI
        data-test="UpdateRoutes"
        status={this.props.status}
        submitHandle={this.submitHandle}
        handleChange={this.handleChange}
        handleSelect={this.handleSelect}
        updateRoute={this.state}
        isLoading={this.state.isLoading}
        routesArr={this.props.routesArr}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.getReducer.routeid,
    routesArr: state.routeReducer.locationArray,
    token: state.userReducer.tokken,
  };
}

export default connect(mapStateToProps, {
  getRouteById,
  clearCurrentTarget,
  updateRouteDetail,
})(Updateroutes);

Updateroutes.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  token: PropTypes.string,
  location: PropTypes.object,
  updateRouteDetail: PropTypes.func,
  history: PropTypes.object,
  clearCurrentTarget: PropTypes.func,
  getRouteById: PropTypes.func,
  routesArr: PropTypes.array,
};
