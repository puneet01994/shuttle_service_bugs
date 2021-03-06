import React from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { login } from "../../Redux/actions/POST-API";
import { getHomePageCard, getStatusTable } from "../../Redux/actions/GET-API";
import { askForPermissioToReceiveNotifications } from "../../Redux/actions/POST-API";

import "../../Styles/Login.css";
import PropTypes from "prop-types";
import { admin, welocome, userName } from "../../Constants/constants";


/**
 * displays the form page to login into the app
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
  }

  /**
   * to set the value
   */
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /**
   * to submit the credentials entered and login to the app
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.askForPermissioToReceiveNotifications().then((response) => {
      if (response) {
        const body = {
          id: this.state.id,
          password: this.state.password,
          deviceToken: 'response',
        };
        this.loginFunction(body);
      }
    });
  };

  /**
   * redirect to the dashboard
   */
  loginFunction = (body) => {
    this.props.login(body).then(() => {
      this.props.isAuthenticated && this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div data-test="loginComponent" className="LogP">
        <br />
        <br />
        <br />

        <Form className="Login-form">
          <h1 className="text-center">
            <span className="font-weight-bold">{admin}</span>Login
          </h1>
          <h2 className="text-center">{welocome} </h2>
          <FormGroup>
            <Label className="font-weight-bold">{userName}</Label>
            <Input
              type="text"
              required
              id="username"
              name="id"
              placeholder="Username"
              value={this.state.id}
              onChange={this.changeHandler}
            />
            <Label className="font-weight-bold">password</Label>
            <Input
              type="Password"
              id="password"
              required
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </FormGroup>

          <Button
            className="btn-lg btn-dark btn-block"
            color="primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </Form>
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.userReducer.tokken,
    isAuthenticated: state.userReducer.boolean,
  };
}

export default connect(mapStateToProps, {
  login,
  getHomePageCard,
  getStatusTable,
  askForPermissioToReceiveNotifications,
})(Login);

Login.propTypes = {
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  history: PropTypes.object,
  askForPermissioToReceiveNotifications: PropTypes.func,
};
