import React, { Component, useState } from "react";
import "../Styles/Custom.css";
import serverlessarch from "../Images/server-less-arch.png";
import {
  Route,
  Link,
  withRouter,
  Switch,
  useHistory,
  useParams
} from "react-router-dom";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { device } from "./device";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Login() {
  const [hasError, setHasError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  console.log(history);

  const handlechnage = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const PageLogin = async e => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      history.push("/home");
    } catch (e) {
      setHasError(true);
      setErrorDescription(e.message);
    }
  };

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
        {hasError && <h5 className='errorStyle'> {errorDescription}</h5>}
        <form autoComplete='off'>
          {/*<TextField id='standard-basic' label='enter e-mail id' /> */}
          <input
            className='input-style'
            onChange={handlechnage}
            type='text'
            name='email'
            id='email'
            placeholder='Enter e-mail address'
          />
          <br /> <br />
          <input
            className='input-style'
            autoComplete='new-password'
            onChange={handlechnage}
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password'
          />
          <ButtonsSection>
            <Link className='btn btn-primary'>
              <div onClick={PageLogin}>Let's Go </div>
            </Link>

            <Link className='btn btn-primary' to='/register'>
              Sign-up
            </Link>
          </ButtonsSection>
        </form>
      </div>
    </div>
  );
}

export default Login;
