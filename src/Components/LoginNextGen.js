import React from "react";
import PreloginNavigation from "./PreloginNavigation";
import PreLoginBody from "./PreLoginBody";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import NoMatch from "../Components/NoMatch";
import SidebarMenu from "../Components/SidebarMenu";
import styled from "styled-components";
import { device } from "./device";
import LoginBig from "../Images/login.jpg";
import LoginMedium from "../Images/key-medium-image.jpg";
import LoginSmall from "../Images/key-small-image.jpg";
import LoginWithKeyboard from "../Images/login-with-key.jpg";

export default function LoginNextGen() {
  const LoginBackground = styled.div`
    grid-area: body;
    @media ${device.tablet} {
      background-image: url(${LoginBig});
    }
    background-image: url(${LoginWithKeyboard});
    //  background-image: url("../Images/login-with-key.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top left;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* align-items: center; */
  `;

  return (
    <div className='login-container'>
      <div className='header-item'>
        <PreloginNavigation />
      </div>
      <SidebarMenu />
      <Switch>
        <Route path='/' exact>
          <div className='body-item'>
            <PreLoginBody />
          </div>
        </Route>
        <Route path='/login'>
          <LoginBackground>
            <Login />
          </LoginBackground>
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>

      <div className='footer-item'>
        <Footer />
      </div>
    </div>
  );
}
