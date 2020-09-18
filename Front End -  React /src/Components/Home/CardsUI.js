import React from "react";

import PropTypes from "prop-types";

import completed from "../../Assets/completed.png";
import ongoing from "../../Assets/ongoing.png";
import total from "../../Assets/total.png";
import upcoming from "../../Assets/upcoming.png";
import { Card, CardBody, Row, Col } from "reactstrap";
import {
  completedTrips,
  upcomingTrips,
  employeeTravelling,
  totalTrips,
} from "../../Constants/constants";

/**
 * CardsUI function called to display the details of upcoming,
 * ongoing,completed and total trips.
 * @param {object} props
 *    @param {number} status
 *    @param {number} status1
 *    @param {number} status2
 *    @param {number} status3
 */

const CardsUI = ({ cardsData }) => {
  const {
    totalTripCard,
    employeeTripCard,
    upcomingTripCard,
    completedTripCard,
  } = cardsData;

  return (
    <div data-test="CardComponent" className="animated fadeIn">
      <Row>
        <Col>
          <Card style={{ backgroundColor: "#45a1b8" }}>
            <CardBody data-test="UpcomingCardData">
              {upcomingTripCard === null ? "-     " : upcomingTripCard}
              &nbsp; {upcomingTrips}
            </CardBody>
            <CardBody>
              <img
                data-test="UpcomingCardImage"
                width={60}
                height={60}
                src={upcoming}
                alt="Card upcoming"
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "#f9d239" }}>
            <CardBody data-test="EmployeeTravellingCardData">
              {employeeTripCard !== null ? "-     " : employeeTripCard}
              &nbsp; {employeeTravelling}
            </CardBody>
            <CardBody>
              <img
                data-test="EmployeeTravellingCardImage"
                width={60}
                height={60}
                src={ongoing}
                alt="Employee Travelling"
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ backgroundColor: "#e24442f0" }}>
            <CardBody data-test="CompletedCardData">
              {completedTripCard !== null ? "-     " : completedTripCard}
              &nbsp;{completedTrips}
            </CardBody>
            <CardBody>
              <img
                data-test="CompletedCardImage"
                width={60}
                height={60}
                src={completed}
                alt="Card completed"
              />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "#8a8f94" }}>
            <CardBody data-test="TotalTripCardData">
              {totalTripCard === null ? "-     " : totalTripCard}
              &nbsp; {totalTrips}
            </CardBody>
            <CardBody>
              <img
                data-test="TotalCardImage"
                width={60}
                height={60}
                src={total}
                alt="Card total"
              />
            </CardBody>
          </Card>
        </Col>{" "}
      </Row>
    </div>
  );
};

CardsUI.propTypes = {

};
export default CardsUI;
