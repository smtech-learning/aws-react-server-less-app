import React, { Component, Fragment } from "react";
import "../Styles/Custom.css";
import cloud from "../Images/cloud.png";
import serverlessarch from "../Images/server-less-arch.png";
import { Route, NavLink, Switch } from "react-router-dom";
import { browserHistory } from "history";
import { Auth } from "aws-amplify";

class Login extends Component {
  constructor(props) {
    super(props);
    this.PageLogin = this.PageLogin.bind(this);
    this.handlechnage = this.handlechnage.bind(this);
    this.state = {
      password: "",
      email: ""
    };
    this.state = { hasError: false };
    this.state = { errorDescription: "" };
  }

  handlechnage(e) {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  }

  async PageLogin(e) {
    e.preventDefault();
    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.history.push("/home");
    } catch (e) {
      this.setState({ hasError: true });
      this.setState({ errorDescription: e.message });
    }
  }

  render() {
    return (
      <div className='login-input-section'>
        <div className='login-wrapper'>
          <h3>Login/Signup</h3>
          <input placeholder='login information' type='text' />
          <br />
          <input placeholder='Password' type='text' />
        </div>
      </div>
    );
  }
}
export default Login;
