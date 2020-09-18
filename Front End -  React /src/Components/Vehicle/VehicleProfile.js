import React, { Component } from "react";
import { connect } from "react-redux";
import { getVehicleProfile } from "../../Redux/actions/GET-API";
import { Card, CardBody, Table } from "reactstrap";

import PropTypes from "prop-types";
import {
  tripId,
  origin,
  destination,
  name,
  empId,
  bookingId,
} from "../../Constants/constants";

/**
 * displays the trips detauls of the particular vehicle
 */
class VehicleProfile extends Component {
  /**
   * mount the VehicleProfile component
   */
  componentDidMount() {
    this.props.getVehicleProfile(this.props.match.params.bookingId);
  }

  render() {
    return (
      <div className="container">
        <h3 className="Add-form">
          {bookingId}
          {this.props.match.params.bookingId}
        </h3>
        <div className="BigTbl">
          <Card>
            <CardBody>
              <Table responsive striped hover>

                <thead>
                  <tr>
                    <th>{tripId}</th>
                    <th>{origin}</th>
                    <th>{destination}</th>
                    <th>{name}</th>
                    <th>{empId}</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.vehicleProfile &&
                    this.props.vehicleProfile.map((booking, index) => (
                      <tr key={index}>
                        <td>{booking.tripid}</td>
                        <td>{booking.origin}</td>
                        <td>{booking.destintion}</td>
                        <td>{booking.nama}</td>
                        <td>{booking.employeId}</td>
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
    vehicleProfile: state.vehicleReducer.vehicleProfile,
  };
};
export default connect(mapStateToProps, { getVehicleProfile })(VehicleProfile);

VehicleProfile.propTypes = {
  match: PropTypes.object,
  getVehicleProfile: PropTypes.func,
  vehicleProfile: PropTypes.func,
};
