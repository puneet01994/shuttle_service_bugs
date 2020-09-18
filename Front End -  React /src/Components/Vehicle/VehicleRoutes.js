import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getVehicleRoute,
  getVehicleInfo,
  getRouteinfo,
} from "../../Redux/actions/GET-API";
import PropTypes from "prop-types";

import { postVehicleRouteInfo } from "../../Redux/actions/POST-API";
import { deleteVehicleRouteInfo } from "../../Redux/actions/DELETE-API";
import { updateVehicleNumber } from "../../Redux/actions/PUT-API";

import "../../Styles/table.css";

import VehicleRoutesUI from "../Vehicle/VehicleRoutesUI";
import { areYouSureBeforeDelete } from "../Pages/Swal";

class VehicleRoutes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectitem: "",
      routeId: "",
      route: "",
      routeTimings: "",
      vehicleNumber: "",
      latestBookingDate: "",
      enablebutton: false,
      targetId: "",
      isLoading: true,
      oldVehiclenumber: "",
      newVehicleNumber: "",
      addModalShow: false,
      addModalShow1: false,
      val: 0,
      vehRoute: "vehRoute",
    };
  }
  /**
   * mount the componenet
   */
  componentDidMount = () => {
    this.props.getVehicleRoute(this.props.token);
    this.props.getRouteinfo(this.props.token);
    this.props.getVehicleInfo(this.props.token);
  };

  /**
   * submit function to add new vehicle routes
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} routeId
   *                  @param {string} vehicleNumber
   *                  @param {string} route
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const addVehicleRouteBody = {
      routeId: this.state.routeId,
      vehicleNumber: this.state.vehicleNumber,
      route: this.state.route,
    };

    this.props.postVehicleRouteInfo(addVehicleRouteBody, this.props.token);
    this.addModalclose();
  };
  /**
   * to submit the update vehicle number
   */
  handleSubmit1 = (e) => {
    e.preventDefault();
    let token = 'abcd1234'
    this.props.updateVehicleNumber(this.state, token);
    this.addModalclose1();
  };

  /**Modal is closed */
  addModalclose = () =>
    this.setState({
      route: "",
      routeTimings: "",
      addModalShow: false,
    });

  /**Modal is closed */
  addModalclose1 = () =>
    this.setState({
      addModalShow1: true,
    });

  /**Modal is open */
  addModalopen = () => {
    this.setState({ addModalShow: false });
  };

  /**Modal is open */
  addModalopen1 = () => {
    this.setState({ addModalShow1: false });
  };

  /**
   * update the props
   * @param {object} nextProps
   * @param {object} prevState
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status1 !== prevState.status1) {
      return { status1: nextProps.status1 };
    } else return null;
  }

  /**
   * to update and set the props
   * @param {object} prevProps
   * @param {object} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status1 !== this.props.status1) {
      this.setState({ ...this.props.status1, isLoading: false });
    }
  }

  /**fuction to select a particular row according to the id passed */
  handleCheckChange = (id) => {
    this.setState({
      targetId: `id-${id}`,
    });
  };

  /**
   * set the state of value
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  /**
   * to set the state to select  particular vehicle number
   */
  handleSelectedItemsVehicle = (e) => {
    this.setState({
      vehicleNumber: e.target.value,
    });
  };

  /**
   * to set the sate to select particular route
   */
  handleSelectedItemsRoute = (e) => {
    var arr = this.props.routeid.filter(
      (item, index) => item.routeId === e.target.value
    );
    var object = arr[0];
    this.setState({
      routeId: e.target.value,
      route: object.route,
      routeTimings: object.routeTimings,
    });
  };

  /**deletes the vehicleRoutes entry based on the targetId passed */
  delete = (targetId) => {
    areYouSureBeforeDelete().then((willDelete) => {
      willDelete &&
        this.props.deleteVehicleRouteInfo(targetId, this.props.token);
    });
  };

  /**to sort the table data according to the values passed
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} sortBy
   *                  @param {string} val
   *                  @param {string} pageSize
   */
  handleTableChange = (e) => {
    const limit = this.props.vehRoutesTotalPages;
    if (
      e.target.value === "20" ||
      e.target.value === "30" ||
      e.target.value === "40" ||
      e.target.value === "50"
    ) {
      this.setState({ pageSize: e.target.value, val: 0 }, () =>
        this.props.getVehicleRoute(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (
      e.target.value === "vehicleNumber" ||
      e.target.value === "vehicleModel" ||
      e.target.value === "seats"
    ) {
      this.setState({ sortBy: e.target.value }, () =>
        this.props.getVehicleRoute(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "Next") {
      if (this.state.val < limit - 1) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getVehicleRoute(
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    } else if (e.target.value === "Prev") {
      if (this.state.val > 0) {
        this.setState({ val: this.state.val - 1 }, () => {
          this.props.getVehicleRoute(
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      } else {
        this.props.getVehicleRoute(
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
       *  @returns {JSX.Element}-rendered component of VehicleRoutesUI
       */
      <VehicleRoutesUI
        data-test="VehicleRoutes"
        val={this.state.val}
        isLoading={this.state.isLoading}
        addModalopen={this.addModalopen}
        addModalopen1={this.addModalopen1}
        addModalclose={this.addModalclose}
        addModalclose1={this.addModalclose1}
        addModalShow={this.state.addModalShow}
        addModalShow1={this.state.addModalShow1}
        status1={this.props.status1}
        handleCheckChange={this.handleCheckChange}
        handleTableChange={this.handleTableChange}
        handleChange={this.handleChange}
        routeId={this.state.routeId}
        route={this.state.route}
        routeTimings={this.state.routeTimings}
        routeid={this.props.routeid}
        token={this.props.token}
        enableButton={this.state.enableButton}
        targetId={this.state.targetId}
        delete={this.delete}
        vehicles={this.props.vehicles}
        handleSelectedItemsRoute={this.handleSelectedItemsRoute}
        handleSelectedItemsVehicle={this.handleSelectedItemsVehicle}
        handleSubmit={this.handleSubmit}
        handleSubmit1={this.handleSubmit1}
        vehRoute={this.state.vehRoute}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status1: state.vehicleReducer.Vehicle_route,
    vehicles: state.vehicleReducer.VehicleInfoAllResult,
    routeid: state.routeReducer.RouteInfoAllResult,
    token: state.userReducer.tokken,
    error: state.vehicleReducer.errorMsg,
    vehRoutesTotalPages: state.vehicleReducer.vehRoutesTotalPages,
  };
}

export default connect(mapStateToProps, {
  postVehicleRouteInfo,
  getVehicleRoute,
  updateVehicleNumber,
  deleteVehicleRouteInfo,
  getVehicleInfo,
  getRouteinfo,
})(VehicleRoutes);

VehicleRoutes.propTypes = {
  status1: PropTypes.array,
  token: PropTypes.string,
  getVehicleRoute: PropTypes.func,
  getVehicleInfo: PropTypes.func,
  postVehicleRouteInfo: PropTypes.func,
  getRouteinfo: PropTypes.func,
  routeid: PropTypes.object,
  vehicles: PropTypes.object,
  updateVehicleNumber: PropTypes.func,
  deleteVehicleRouteInfo: PropTypes.func,
  vehRoutesTotalPages: PropTypes.string,
};
