import React from "react";
import PropTypes from "prop-types";

import CardsUI from "./CardsUI";

import {
  Card,
  CardBody,
  Col,
  CardHeader,
  Row,
  ButtonToolbar,
  Button,
  ButtonGroup,
} from "reactstrap";
import "../../Styles/table.css";
import Loader from "../Pages/Loader";

import {
  employeeStatus,
  ddriverStatus,
  vehicleStatus,
} from "../../Constants/constants";
import StatusTableUI from "./StatusTableUI";
import DriverStatusUI from "./DriverStatusUI";
import VehicleHavingTrips from "./VehicleHavingTrips";
import ErrorBoundary from "../Pages/ErrorBoundary";

/**
 * HomeUI to display the home page data
 * loader to dispaly the oading process.
 * CardsUI to display the card details.
 * CardHeader to display the buttons to switch between the table.
 * TableUI to display the tablular status of the employee travelling,
 * driver details having trips and the vehicle status.
 * @param {object} props
 */

const HomeUI = ({ cardsData, tablesData, isLoading, selectedTable, value }) => {
  const { bookingStatus, vehiclesHavingTrips, driverStatus } = tablesData;
  const Tables = () => {
    switch (value) {
    case 1:
      return (
        <StatusTableUI
          data-test="StatusTableUI"
          bookingStatus={bookingStatus}
        />
      );
    case 2:
      return (
        <DriverStatusUI
          data-test="DriverStatusUI"
          driverStatus={driverStatus}
        />
      );
    case 3:
      return (
        <VehicleHavingTrips
          data-test="VehicleHavingTripsUI"
          vehiclesHavingTrips={vehiclesHavingTrips}
        />
      );
    default:
      return null;
    }
  };
  return isLoading ? (
    <Loader data-test="loader" />
  ) : (
    <div data-test="cards" className="animated fadeIn">
      <CardsUI cardsData={cardsData} />

      <div className="header">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                {" "}
                <ButtonToolbar
                  className="float-right"
                  aria-label="Toolbar with button groups"
                >
                  <ButtonGroup
                    className="mr-3"
                    aria-label="First group"
                    size="sm"
                  >
                    <Button
                      data-test="selectBtn"
                      size="sm"
                      color="outline-info"
                      onClick={() => selectedTable(3)}
                    >
                      {employeeStatus}
                    </Button>
                    <Button
                      data-test="selectBtn1"
                      size="sm"
                      color="outline-info"
                      onClick={() => selectedTable(3)}
                    >
                      {ddriverStatus}
                    </Button>
                    <Button
                      data-test="selectBtn2"
                      size="sm"
                      color="outline-info"
                      onClick={() => selectedTable(3)}
                    >
                      {vehicleStatus}
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </CardHeader>

              <CardBody>
                <ErrorBoundary>
                  <Tables />
                </ErrorBoundary>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeUI;

HomeUI.propTypes = {
  isLoading: PropTypes.bool,
  status: PropTypes.number,
  status1: PropTypes.number,
  status2: PropTypes.number,
  status3: PropTypes.number,
  selectedTable: PropTypes.func,
  value: PropTypes.number,
};
