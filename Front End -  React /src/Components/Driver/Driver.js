/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { areYouSureBeforeDelete } from "../../Components/Pages/Swal";

import { getuserinfo } from "../../Redux/actions/GET-API";
import { postuserInfo } from "../../Redux/actions/POST-API";
import { deleteDriver } from "../../Redux/actions/DELETE-API";
import DriverUI from "./DriverUI";
import logger from "../Pages/Logger";

class Driver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      gender: "",
      contactNumber: null,
      emailid: "",
      role: "DRIVER",
      addModalShow: false,
      targetId: "",
      titel: "Add Driver",
      val: 0,
      label: "Driver Id",
      isLoading: true,
      status1: [],
    };
  }

  /**
   * rendering th component
   */
  componentDidMount() {
    this.props.getuserinfo();
    logger.info("Drivers Details", this.props.status1);

  }

  /**set  the form values */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**
   * submit function to add new driver details
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} id
   *                  @param {string} name
   *                  @param {string} gender
   *                  @param {string} contactNumber
   *                  @param {string} emailId
   *                  @param {string} role
   *
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      id: this.state.id,
      name: this.state.name,
      gender: this.state.gender,
      contactNumber: this.state.contactNumber,
      emailId: this.state.emailId,
      role: "DRIVER",
    };
    logger.info("Driver added", body);
    this.props.postuserInfo(body, this.props.token);
    this.addModalclose();
  };

  /**Modal is closed */
  addModalclose = () => {
    this.setState({ addModalShow: false });
  };

  /**Modal is open */
  addModalopen = () => {
    this.setState({ addModalShow: true });
  };

  /**Sets the gender to the selected value */
  settingGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

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

  /**set the props types to updated */
  componentDidUpdate(prevProps) {
    if (prevProps.status1 !== this.props.status1) {
      this.setState({ ...this.props.status1, isLoading: false });
    }
  }

  /**to set the gender according to the value selected*/
  handleOptionChange = (e) => {
    {
      (e.target.value === "MELA" || e.target.value === "FEMLE") &&
        this.settingGender(e);
    }
  };

  /**fuction to select a particular row according to the id passed */
  handleCheckChange = (id) => {
    this.setState({
      targetId: id,
    });
  };

  /**to sort the table data according to the values passed
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} sortBy
   *                  @param {string} val
   *                  @param {string} pageSize
   */
  handleTableChange = (e) => {
    const limit = this.props.driverTotalPages;
    if (
      e.target.value === "20" ||
      e.target.value === "30" ||
      e.target.value === "40" ||
      e.target.value === "50"
    ) {
      this.setState({ pageSize: e.target.value, val: 0 }, () =>
        this.props.getuserinfo(
          this.props.data.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "id" || e.target.value === "name") {
      this.setState({ sortBy: e.target.value }, () =>
        this.props.getuserinfo(
          this.props.data.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "Next") {
      if (this.state.val < limit - 1) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getuserinfo(
            this.props.data.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    } else if (e.target.value === "Prev") {
      if (this.state.val > 0) {
        this.setState({ val: this.state.val - 1 }, () => {
          this.props.getuserinfo(
            this.props.data.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      } else {
        this.props.getuserinfo(
          this.props.data.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        );
      }
    }
  };

  /**deletes the driver entry based on the targetId passed */
  delete = (targetId) => {
    areYouSureBeforeDelete().then((willDelete) => {
      willDelete && this.props.deleteDriver(1, this.props.token);
    });
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of driverUI
       */
      <DriverUI
        data-test="driver"
        delet={this.delete}
        val={this.props.val.pageNumber}
        targetId={this.state.targetId}
        handleCheckChange={this.handleCheckChange}
        handleTableChange={this.handleTableChange}
        gender={this.state.gender}
        status1={this.props.status1}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleOptionChange={this.handleOptionChange}
        addModalShow={this.state.addModalShow}
        addModalclose={this.addModalclose}
        addModalopen={this.addModalopen}
        title={this.state.title}
        labal={this.state.label}
        isLoadng={this.state.isLoading}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    status1: state.userReducer.driverData.content,
    driverTotalPages: state.userReducer.driverData.totalPages,
    val:state.userReducer.driverData.pageable

  };
}

export default connect(mapStateToProps, {
  getuserinfo,
  postuserInfo,
  deleteDriver,
})(Driver);

Driver.propTypes = {
  getuserinfo: PropTypes.func,
  token: PropTypes.string,
  postuserInfo: PropTypes.func,
  status1: PropTypes.array,
  driverTotalPages: PropTypes.number,
  deleteDriver: PropTypes.func,
};
