import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../Redux/actions/GET-API";
import { Card, CardBody, Table } from "reactstrap";
import PropTypes from "prop-types";
import {
  tripDetails,
  date,
  origin,
  destination,
  vehicleNumber,
  tripTime,
} from "../../Constants/constants";
import logger from "./Logger";

/**
 * Profile to display individual trip details
 */
class Profile extends Component {
  /**
   * to mount the Profile componenet
   */
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id);
    logger.info("User Profile data-", this.props.userProfile);
  }
  render() {
    return (
      <div data-test="Profile" className="container">
        <h3 className="Add-form">
          {tripDetails}
          {this.props.match.params.id}
        </h3>
        <div className="BigTbl">
          <Card>
            <CardBody>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>{date}</th>
                    <th>{origin}</th>
                    <th>{destination}</th>
                    <th>{vehicleNumber}</th>
                    <th>{tripTime}</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.userProfile &&
                    this.props.userProfile.map((user, index) => (
                      <tr data-test="profileRow" key={index}>
                        <td>{user.data.date}</td>
                        <td>{user.data.origin}</td>
                        <td>{user.destination}</td>
                        <td>{user.vehicleNumber}</td>
                        <td>{user.tripTime}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.userReducer.userProfile,
  };
};
export default connect(mapStateToProps, { getUserProfile })(Profile);

Profile.propTypes = {
  getUserProfile: PropTypes.func,
  userProfile: PropTypes.object,
  match: PropTypes.object,
};
