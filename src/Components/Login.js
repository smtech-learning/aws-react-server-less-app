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
import styled, { ThemeProvider } from "styled-components";
import { device } from "./device";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

const theme = {
  colors: {
    primary: "#0077B5",
    secondary: "#000000"
  }
};

const Wrapper = styled(Card)`
  margin: 20px;
  background: ${props => props.theme.colors.primary};
  padding: 50px;
  border-radius: 5px;
  // box-shadow: 5px 5px 5px gray;
  // box-shadow: 0 2px 50px 0 #0076ff;
  box-shadow: 0 2px 50px 0 #fff;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LoginInputSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/* The below component is NOT in use I kept fopr some reference code if I were to use plain old CSS versus MaterialUI*/
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

/* The below component is NOT in use I kept fopr some reference code on how to pass a arrow function*/
const Input2 = styled((...props) => <input {...props} />)`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;

/* The below component is NOT in use I kept fopr some reference code on how to add attributes*/

const Input3 = styled.input.attrs({ value: props => props.value })`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgb(13, 88, 202);
  justify-content: center;
  align-content: center;
  font-size: 2rem;
`;
const StyledTextField = styled(TextField)`
  font-size: 40;
`;

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

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LoginInputSection>
          <Wrapper>
            {hasError && <h5 className='errorStyle'> {errorDescription}</h5>}
            <form>
              {/* <StyledTextField id='standard-basic' label='enter e-mail id dsss' /> */}
              <Input
                className='input-style'
                onChange={handlechnage}
                type='text'
                name='email'
                id='email'
                placeholder='Enter e-mail address'
              />
              <br /> <br />
              <Input
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
          </Wrapper>
        </LoginInputSection>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Login;
