import React, { Component } from "react";
import "../Styles/Custom.css";
import serverlessarch from "../Images/server-less-arch.png";
import { Route, NavLink, withRouter, Switch } from "react-router-dom";
import { browserHistory } from "history";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { device } from "./device";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
      console.log(e.target.value);
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
      margin: 20px;
      background: #fff;
      padding: 50px;
      border-radius: 5px;
      box-shadow: 5px 5px 5px gray;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;

    const ButtonsSection = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 20px;
    `;

    const Input = styled.input`
      background: transparent;
      border: none;
      border-bottom: 1px solid rgb(13, 88, 202);
      justify-content: center;
      align-content: center;
      font-size: 2rem;
    `;

    return (
      <div className='loginInputSection'>
        <div className='loginWrapper'>
          {this.state.hasError && (
            <h5 className='errorStyle'> {this.state.errorDescription}</h5>
          )}
          <form autoComplete='off'>
            {/*<TextField id='standard-basic' label='enter e-mail id' /> */}
            <input
              className='input-style'
              onChange={this.handlechnage}
              type='text'
              name='email'
              id='email'
              placeholder='Enter e-mail address'
            />
            <br /> <br />
            <input
              className='input-style'
              autocomplete='new-password'
              onChange={this.handlechnage}
              type='password'
              name='password'
              id='password'
              placeholder='Enter Password'
            />
            <ButtonsSection>
              <NavLink className='btn btn-primary'>
                <div onClick={this.PageLogin}>Let's Go </div>
              </NavLink>

              <NavLink className='btn btn-primary' to='/register'>
                Sign-up
              </NavLink>
            </ButtonsSection>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
