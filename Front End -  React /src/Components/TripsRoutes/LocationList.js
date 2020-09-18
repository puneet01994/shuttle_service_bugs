import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocation } from "../../Redux/actions/GET-API";
import { postLocation } from "../../Redux/actions/POST-API";
import { deleteLocation } from "../../Redux/actions/DELETE-API";
import PropTypes from "prop-types";

import "../../Styles/table.css";
import LocationListUI from "./LocationListUI";
import { areYouSureBeforeDelete } from "../Pages/Swal";
import logger from "../Pages/Logger";

class LocationList extends Component {
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

  /**Modal is open */
  addModalopen = () => {
    this.setState({ addModalShow: true });
  };
  /**
   * mount location componenet
   */
  componentDidMount() {
    this.props.getLocation(this.props.token); 
    logger.info("location list data-",this.props.status1 );

  };

  /**
   * set the value
   */
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  /**
   * submit function to add new location
   * function is called when submit button on the form of modal is clicked.
   * This function is called and sets the selected value to the state
   * @param {Object} state -- state consists of the followings-
   *                  @param {srting} location
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      location: this.state.location,
    };
    this.props.postLocation(body);
    this.addModalclose();
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
   * update and set the props
   * @param {object} prevProps 
   * @param {object} prevState 
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status1 !== this.props.status1) {
      this.setState({ ...this.props.status1, isLoading: false });
    }
  }

  /**Modal is closed */
  addModalclose = () => this.setState({ addModalShow: false });

  /**
   * check and set the state
   */
  handleCheckChange = (id) => {
    this.setState({
      targetId: id,
    });
  };

  /**deletes the location based on the targetId passed */
  delete = (targetId) => {
    areYouSureBeforeDelete().then((willDelete) => {
      willDelete && this.props.deleteLocation(1, this.props.token);
    });
  };

  render() {
    return (
      /**
       *  @returns {JSX.Element}-rendered component of LocationListUI
       */
      <LocationListUI
        data-test="LocationList"
        handleCheckChange={this.handleCheckChange}
        addModalShow={this.state.addModalShow}
        addModalclose={this.addModalclose}
        addModalopen={this.addModalopen}
        handleSubmit={this.handleSubmit}
        status1={this.props.status1}
        token={this.props.token}
        isLoading={this.state.isLoading}
        enableButton={this.state.enableButton}
        targetId={this.state.targetId}
        delete={this.delete}
        handleChange={this.handleChange}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status1: state.routeReducer.locationArray,
    token: state.userReducer.tokken,
    error: state.routeReducer.errorMsg,
  };
}

export default connect(mapStateToProps, {
  postLocation,
  getLocation,
  deleteLocation,
})(LocationList);

LocationList.propTypes = {
  getContactus: PropTypes.func,
  status1: PropTypes.array,
  token: PropTypes.string,
  getLocation: PropTypes.func,
  postLocation: PropTypes.func,
  deleteLocation: PropTypes.func,
};
