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
import Slider from "../Components/Slider";
import Home from "./Home";

export default function LoginNextGen() {
  const LoginBackground = styled.div`
    grid-area: body;
    @media ${device.tablet} {
      background-image: url(${LoginBig});
    }
    background-image: url(${LoginWithKeyboard});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: top left;
    display: flex;
    flex-direction: row;
    @media ${device.tablet} {
      justify-content: flex-end;
      
    }
    justify-content: flex-start;
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
            {/* <PreLoginBody /> */}
            <Slider />
          </div>
        </Route>
        <Route path='/login'>
          <LoginBackground>
            <Login />
          </LoginBackground>
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>

      <div className='footer-item'>
        <div> @sureshmunnangi</div>
        <Footer />
      </div>
    </div>
  );
}
