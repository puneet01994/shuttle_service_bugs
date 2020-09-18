/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { connect } from "react-redux";
import { postuserInfo } from "../../Redux/actions/POST-API";
import { deleteRider } from "../../Redux/actions/DELETE-API";
import { getuserinfo } from "../../Redux/actions/GET-API";
import RiderUI from "./RiderUI";
import "antd/dist/antd.css";
import { areYouSureBeforeDelete } from "../Pages/Swal";
import PropTypes from "prop-types";
import ErrorBoundary from "../Pages/ErrorBoundary";
import logger from "../Pages/Logger";

class Rider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      val: 0,
      targetId: "",
      name: "",
      gender: "",
      contactNumber: null,
      emailId: "",
      managerId: "",
      role: "EMPLOYEE",
      addModalShow: false,
      label: "Employee Id",
      ManagerId: "Mid",
      isLoading: true,
    };
  }

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
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      id: this.state.id,
      name: this.state.name,
      gender: this.state.gender,
      contactNumber: this.state.contactNumber,
      emailId: this.state.emailId,
      role: "EMPLOYEE",
      managerId: this.state.managerId,
    };
    this.props.postuserInfo(body, this.props.token);
    logger.info("Rider added", body);

    this.addModalclose();
  };

  /**Modal is closed */
  addModalclose = () => {
    this.setState({ addModalShow: false });
  };

  /**Modal is closed */
  addModalopen = () => {
    this.setState({ addModalShow: true });
  };

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
      (e.target.value === "M" || e.target.value === "F") &&
        this.settingGender(e);
    }
  };

  /**
   * mount the userinfo i.e  rider component
   */
  componentDidMount() {
    this.props.getuserinfo(this.props.token);
    logger.info("Rider Details", this.props.status1);

  }

  /**update the props */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status1 !== prevState.status1) {
      return { status1: nextProps.status1 };
    } else return null;
  }

  /**
   * update and set the previous state
   * @param {object} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.status1 !== this.props.status1) {
      this.setState({ ...this.props.status1, isLoading: false });
    }
  }

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
    let limit = this.props.riderTotalPages;
    if (
      e.target.value === "20" ||
      e.target.value === "30" ||
      e.target.value === "40" ||
      e.target.value === "50"
    ) {
      this.setState({ val: 0, pageSize: e.target.value }, () =>
        this.props.getuserinfo(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.value === "id" || e.target.value === "name") {
      this.setState({ sortBy: e.target.value }, () =>
        this.props.getuserinfo(
          this.props.token,
          this.state.sortBy,
          this.state.val,
          this.state.pageSize
        )
      );
    } else if (e.target.id === "next") {
      if (this.state.val < limit - 1) {
        this.setState({ val: this.state.val + 1 }, () => {
          this.props.getuserinfo(
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    } else if (e.target.id === "prev") {
      if (this.state.val > 0) {
        this.setState({ val: this.state.val - 1 }, () => {
          this.props.getuserinfo(
            this.props.token,
            this.state.sortBy,
            this.state.val,
            this.state.pageSize
          );
        });
      }
    }
  };
  /**deletes the driver entry based on the targetId passed */
  delete = (targetId) => {
    areYouSureBeforeDelete().then((willDelete) => {
      willDelete && this.props.deleteRider(targetId, this.props.token);
    });
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of riderUI
       */
      <ErrorBoundary>
        <RiderUI
          data-test="RiderUI"
          val={this.props.val.pageNumber}
          delete={this.delete}
          handleTableChange={this.handleTableChange}
          targetId={this.state.targetId}
          handleCheckChange={this.handleCheckChange}
          handleSubmit={this.handleSubmit}
          handleOptionChange={this.handleOptionChange}
          handleChange={this.handleChange}
          addModalopen={this.addModalopen}
          addModalclose={this.addModalclose}
          addModalShow={this.state.addModalShow}
          status1={this.props.status1}
          gender={this.state.gender}
          deleteRider={this.props.deleteRider}
          title={this.state.title}
          ManagerId={this.state.ManagerId}
          label={this.state.label}
          isLoading={this.state.isLoading}
        />
      </ErrorBoundary>
    );
  }
}

function mapStateToProps(state) {
  return {
    status1: state.userReducer.riderData.content,
    riderTotalPages: state.userReducer.riderData.totalPages,
     val:state.userReducer.riderData.pageable
  };
}

export default connect(mapStateToProps, {
  getuserinfo,
  postuserInfo,
  deleteRider,
})(Rider);

Rider.propTypes = {
  getContactus: PropTypes.func,
  token: PropTypes.string,
  postuserInfo: PropTypes.func,
  getuserinfo: PropTypes.func,
  riderTotalPages: PropTypes.number,
  deleteRider: PropTypes.func,
  status1: PropTypes.array,
};
