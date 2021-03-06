import React, { Component } from "react";
import { connect } from "react-redux";
import { getRouteinfo, getLocation } from "../../Redux/actions/GET-API";
import { postRouteInfo } from "../../Redux/actions/POST-API";
import { deleteRoute } from "../../Redux/actions/DELETE-API";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

import "../../Styles/table.css";
import RoutesUI from "./RoutesUI";
import { areYouSureBeforeDelete } from "../Pages/Swal";
import logger from "../Pages/Logger";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeId: "",
      route: [],
      routeTimings: [],
      enableButton: false,

      radioButton: false,
      addModalShow: false,
      targetId: "",
      isLoading: true,

      tableName: "RouteTbl",
      fileName: "RouteInfo",
      val: 0,
    };
  }

  /**
   * mount the routes component
   */
  componentDidMount = () => {
    this.props.getRouteinfo(this.props.token);
    this.props.getLocation(this.props.token);
    logger.info("Routes data-",this.props.status1 );

  };

  /**
   * to set the state on  on change
   */
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**
   * submit function to add new route
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} route
   *                  @param {string} routeTimings
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      route: this.state.route,
      routeTimings: this.state.routeTimings,
    };
    logger.info("Route added -",body );

    this.props.postRouteInfo(body, this.props.token);

    this.addModalclose();
  };

  /**Add the route by selecting the options*/
  handleChange = (e) => {
    let selectedOptions = e;
    this.setState({ route: selectedOptions });
  };

  /**Modal is closed */
  addModalclose = () => this.setState({ addModalShow: false });

  /**Modal is open */
  addModalopen = () => this.setState({ addModalShow: true });

  /**
   * to update the props
   * @param {object} nextProps 
   * @param {object} prevState 
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status1 !== prevState.status1) {
      return { status1: nextProps.status1 };
    } else return null;
  }

  /**
   * to update and set the state
   * @param {object} prevProps 
   * @param {object} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status1 !== this.props.status1) {
      this.setState({ ...this.props.status1, isLoading: false });
    }
  }

  /**
   * to set the state
   */
  handleCheckChange = (id) => {
    this.setState({
      targetId: id,
    });
  };

  /**deletes the driver route on the targetId passed */
  delete = (targetId) => {
    areYouSureBeforeDelete().then((willDelete) => {
      willDelete && this.props.deleteRoute(2, this.props.token);
    });
  };



  /**to sort the table data according to the values passed
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} sortBy
   *                  @param {string} val
   *                  @param {string} pageSize
   */

  handleTableChange = (e) => {
    const limit = this.props.routeTotalPages;
    if (
      e.target.value === "20" ||
      e.target.value === "30" ||
      e.target.value === "40" ||
      e.target.value === "50"
    ) {
      this.setState({ pageSize: e.target.value, val: 0 }, () =>
        this.props.getRouteinfo(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "id" || e.target.value === "name") {
      this.setState({ sortBy: e.target.value }, () =>
        this.props.getRouteinfo(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "Next") {
      if (this.state.val < limit - 1) {
        this.setState({ val: this.state.val - 1 }, () => {
          this.props.getRouteinfo(
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    } else if (e.target.value === "Prev") {
      if (this.state.val > 0) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getRouteinfo(
            this.props.data.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      } else {
        this.props.getRouteinfo(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        );
      }
    }
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of RoutesUI
       */
      <RoutesUI
        data-test="Routes"
        tableName={this.state.tableName}
        fileName={this.state.fileName}
        handleTableChange={this.handleTableChange}
        enableButton={this.state.enableButton}
        val={this.state.val}
        targetId={this.state.targetId}
        handleCheckChange={this.handleCheckChange}
        routesArr={this.props.routesArr}
        status1={this.props.status1}
        routedetails={this.state}
        addModalShow={this.state.addModalShow}
        addModalclose={this.addModalclose}
        addModalopen={this.addModalopen}
        delete={this.delete}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        onChange={this.onChange}
        token={this.props.token}
        isLoading={this.state.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status1: state.routeReducer.RouteInfo,
    routesArr: state.routeReducer.locationArray,
    token: state.userReducer.tokken,
    error: state.routeReducer.errorMsg,
    routeTotalPages: state.routeReducer.routeTotalPages,
  };
}

export default connect(mapStateToProps, {
  postRouteInfo,
  getRouteinfo,
  deleteRoute,
  getLocation,
})(Routes);

Routes.propTypes = {
  getContactus: PropTypes.func,
  status: PropTypes.object,
  token: PropTypes.string,
  getRouteinfo: PropTypes.func,
  status1: PropTypes.array,
  getLocation: PropTypes.func,
  deleteRoute: PropTypes.func,
  routeTotalPages: PropTypes.string,
  routesArr: PropTypes.array,
  postRouteInfo: PropTypes.func,
};
