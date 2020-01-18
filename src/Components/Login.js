import React, { Component, Fragment } from "react";
import "../Styles/Custom.css";
import cloud from "../Images/cloud.png";
import serverlessarch from "../Images/server-less-arch.png";
import { Route, NavLink, Switch } from "react-router-dom";
import { browserHistory } from "history";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { device } from "./device";

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
    const LoginInputSection = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `;

    const LoginWrapper = styled.div`
      margin-right: 10%;
      margin-left: 10%;

      background: #fff;
      padding: 50px;
      border-radius: 5px;
      box-shadow: 5px 5px 5px gray;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;
    return (
      <LoginInputSection>
        <LoginWrapper>
          {this.state.hasError && (
            <h5 className='errorStyle'> {this.state.errorDescription}</h5>
          )}
          <form autoComplete='off'>
            <input
              id='_suburb'
              type='text'
              style={{ display: "none" }}
              disabled
            />
            <input
              onChange={this.handlechnage}
              autocomplete='off_randomstring'
              className='login-style'
              type='text'
              name='email'
              id='email'
              placeholder='Enter e-mail address'
            />
            <br /> <br />
            <input
              onChange={this.handlechnage}
              autocomplete='new-password'
              className='login-style'
              type='password'
              name='password'
              id='password'
              placeholder='Enter Password'
            />
            <br /> <br />
            <NavLink className='btn btn-primary'>
              <div onClick={this.PageLogin}>Confirm Identity &amp; Go ! </div>
            </NavLink>
            -OR- &nbsp;
            <NavLink className='btn btn-primary' to='/register'>
              Sign-up !
            </NavLink>
          </form>
        </LoginWrapper>
      </LoginInputSection>
    );
  }
}
export default Login;
