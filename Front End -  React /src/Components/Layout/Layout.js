/* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import AdminDash from "./AdminDash";
import { Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import Rider from "../Rider/Rider";
import Profile from "../Pages/Profile";
import Driver from "../Driver/Driver";
import UpdateRider from "../Rider/UpdateRider";
import UpdateDriver from "../Driver/UpdateDriver";
import Home from "../Home/Home";
import PropTypes from "prop-types";
import EmployeeStatus from "../Rider/EmployeeStatus";

import CabHistory from "../NightCab/CabHistory";
import UpdateCabRequest from "../NightCab/UpdateCabRequest";
import UpdateEmployeeStatus from "../Rider/UpdateEmployeeStatus";

import Trips from "../TripsRoutes/Trips";
import Routes from "../TripsRoutes/Routes";
import UpdateRoutes from "../TripsRoutes/UpdateRoutes";

import Vehicle from "../Vehicle/Vehicle";

import VehicleStatus from "../Vehicle/VehicleStatus";
import VehicleRoutes from "../Vehicle/VehicleRoutes";

import LocationList from "../TripsRoutes/LocationList";

import navitems from "../../Routing/navitems";
import { signout, sendEmail } from "../../Redux/actions/GET-API";
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from "@coreui/react";
import { connect } from "react-redux";
import Contactus from "../Pages/Contactus";
import UpdateContactus from "../Pages/UpdateContactus";
import CabRequests from "../NightCab/CabRequests";

import SessionStorageService from "../../Services/SessionStorageService";
import Footer from "./Footer";
import VehicleProfile from "../Vehicle/VehicleProfile";
import NotFound from "../Pages/NotFound";
import Oops from "../Pages/Oops";
import { loading } from "../../Constants/constants";
import ProtectedRoute from "./ProtectedRoute";

const sessionStorageService = SessionStorageService.getService();

class Layout extends React.Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">{loading}</div>
  );
  signOut = (e) => {
    e.preventDefault();
    this.props.signout().then((response) => {
      sessionStorageService.clearToken();
    });
    this.redirect();
  };

  redirect = () => {
    this.props.history.push("/");
  };
  sendMail = () => {
    this.props.sendEmail();
  };

  render() {
    const { signout, sendEmail, ...rest } = this.props;
   
    if (
      this.props.error ||
      this.props.error1 ||
      this.props.error2 ||
      this.props.error3 ||
      this.props.error4 ||
      this.props.error5 ||
      this.props.error6
    ) {
      return <Oops data-test="oops" />;
    }

    const { match } = this.props;

    return (
      <div data-test="layoutComponent" className="app">
        <AppHeader fixed>
          <AdminDash
            testID={"admindash"}
            data-test="admindashcomponent"
            onLogout={(e) => this.signOut(e)}
            onSendMail={(e) => this.sendMail(e)}
          />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarNav router={router} navConfig={navitems} {...rest} />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main" style={{ backgroundColor: "#e4e5e6" }}>
            <br />
            <br />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  <ProtectedRoute
                    exact
                    path={`${match.path}`}
                    component={Home}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/Trips`}
                    component={Trips}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/Rider`}
                    component={Rider}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/Driver`}
                    component={Driver}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/Driver/UpdateDriver`}
                    component={UpdateDriver}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/Rider/UpdateRider`}
                    component={UpdateRider}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/Contactus/UpdateContactus`}
                    component={UpdateContactus}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/EmployeeStatus`}
                    component={EmployeeStatus}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/EmployeeStatus/UpdateEmployeeStatus`}
                    component={UpdateEmployeeStatus}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/Contactus`}
                    component={Contactus}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/Routes/UpdateRoutes`}
                    component={UpdateRoutes}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/Routes`}
                    component={Routes}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/Vehicle`}
                    component={Vehicle}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/VehicleRoutes`}
                    component={VehicleRoutes}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/VehicleStatus`}
                    component={VehicleStatus}
                  />

                  <ProtectedRoute
                    exact
                    path={`${match.path}/LocationList`}
                    component={LocationList}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/CabRequests`}
                    component={CabRequests}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/CabHistory`}
                    component={CabHistory}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/NightCab/UpdateCabRequest`}
                    component={UpdateCabRequest}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/Rider/:id`}
                    component={Profile}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/Driver/:id`}
                    component={Profile}
                  />
                  <ProtectedRoute
                    exact
                    path={`${match.path}/VehicleStatus/:bookingId`}
                    component={VehicleProfile}
                  />
                  <Route to="*" component={NotFound}>
                    <router.Redirect to="/404" />
                  </Route>
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter fixed display="lg">
          <Footer />
        </AppFooter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.statusTableReducer.sendEmailMsg,
    error: state.getReducer.error,
    error1: state.userReducer.error,
    error2: state.statusTableReducer.error,
    error3: state.tripReducer.error,
    error4: state.vehicleReducer.error,
    error5: state.routeReducer.error,
    error6: state.homePageCardReducer.error,
    status1: state.userReducer.tokken,
  };
}
Layout.propTypes = {
  error: PropTypes.string,
  sendEmail: PropTypes.func,
  error1: PropTypes.string,
  error2: PropTypes.string,
  error3: PropTypes.string,
  error4: PropTypes.string,
  error5: PropTypes.string,
  history: PropTypes.object,
  error6: PropTypes.string,
  signout: PropTypes.func,
};

export default connect(mapStateToProps, { signout, sendEmail })(Layout);
