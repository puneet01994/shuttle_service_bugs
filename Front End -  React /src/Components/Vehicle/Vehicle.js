import React, { Component } from "react";
import { connect } from "react-redux";
import { getVehicleInfo } from "../../Redux/actions/GET-API";
import { postVehicleInfo } from "../../Redux/actions/POST-API";
import { getVehicleRoute } from "../../Redux/actions/GET-API";
import { deleteVehicleInfo } from "../../Redux/actions/DELETE-API";

import PropTypes from "prop-types";

import "../../Styles/table.css";

import VehicleUI from "./VehicleUI";
import { areYouSureBeforeDelete } from "../Pages/Swal";
import logger from "../Pages/Logger";

class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: null,
      vehicleModel: "",
      enableButton: false,
      targetId: "",
      val: 0,
      isLoading: true,
      vehicleInfo: "vehicleInfo",
    };
  }
  /**Modal is open */
  addModalopen = () => {
    this.setState({ addModalShow: true });
  };
/**
 * to set the value
 */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
/**
 * mount the vehicle compnenet
 */
  componentDidMount()  {
    this.props.getVehicleInfo(this.props.token);
    logger.info("Vehicles data-",this.props.status1 );

  };

  /**
   * submit function to add new vehicle details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} vehicleNumber
   *                  @param {string} seats
   *                  @param {string} vehicleModel
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      vehicleNumber: this.state.vehicleNumber,
      seats: this.state.seat,
      vehicleModel: this.state.vehiclemodel,
    };    logger.info("vehicle added", body);

    this.props.postVehicleInfo(body, this.props.token);
    this.addModalclose();
  };

  /**
   * set the state of id
   */
  handleCheckChange = (id) => {
    this.setState({
      targetId: 1,
    });
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
  /**model is open */
  addModalclose = () =>
    this.setState({
      addModalShow: false,
    });

  /**deletes the vehicle entry based on the targetId passed */
  delete = (targetId) => {
    areYouSureBeforeDelete().then((willDelete) => {
      willDelete && this.props.deleteVehicleInfo(targetId, this.props.token);
    });
  };


  /**to sort the table data according to the values passed
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} sortBy
   *                  @param {string} val
   *                  @param {string} pageSize
   */
  handleTableChange = (e) => {
    const limit = this.props.vehicleInfoTotalpages;
    if (
      e.target.value === "20" ||
      e.target.value === "30" ||
      e.target.value === "40" ||
      e.target.value === "50"
    ) {
      this.setState({ pageSize: e.target.value, val: 0 }, () =>
        this.props.getVehicleInfo(
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
        this.props.getVehicleInfo(
          this.props.token,
          this.state.sortby,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "next") {
      if (this.state.val < limit - 1) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getVehicleInfo(
            this.props.token,
            this.state.sortby,
            this.state.val,
            this.state.pagesize
          );
        });
      }
    } else if (e.target.value === "prev") {
      if (this.state.val > 0) {
        this.setState({ val: this.state.val - 1 }, () => {
          this.props.getVehicleInfo(
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      } else {
        this.props.getVehicleInfo(
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
       *  @returns {JSX.Element}-rendered component of VehicleUI
       */
      <VehicleUI
        data-test="Vehicle"
        isLoading={this.state.isLoading}
        status1={this.props.status1}
        addModalShow={this.state.addModalShow}
        handleTableChange={this.handleTableChange}
        addModalclose={this.addModalclose}
        addModalopen={this.addModalopen}
        enableButton={this.state.enableButton}
        handleCheckChange={this.handleCheckChange}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        targetId={this.state.targetId}
        delete={this.delete}
        val={this.state.val}
        token={this.props.token}
        vehicleInfo={this.state.vehicleInfo}
      />
    );
  }
}

Vehicle.propTypes = {
  status1: PropTypes.array,
  token: PropTypes.string,
  error: PropTypes.string,
  getVehicleInfo:PropTypes.func,
  postVehicleInfo:PropTypes.func,
  deleteVehicleInfo:PropTypes.func,
  vehicleInfoTotalpages:PropTypes.string
};

function mapStateToProps(state) {
  return {
    status1: state.vehicleReducer.Vehicle_info,
    token: state.userReducer.tokken,
    error: state.vehicleReducer.errorMsg,
    vehicleInfoTotalpages: state.vehicleReducer.vehicleInfoTotalpages,
  };
}

export default connect(mapStateToProps, {
  postVehicleInfo,
  getVehicleInfo,
  deleteVehicleInfo,
  getVehicleRoute,
})(Vehicle);

