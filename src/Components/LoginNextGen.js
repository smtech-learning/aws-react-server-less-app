import React from "react";
import PreloginNavigation from "./PreloginNavigation";
import PreLoginBody from "./PreLoginBody";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import NoMatch from "../Components/NoMatch";
import SidebarMenu from "../Components/SidebarMenu";

export default function LoginNextGen() {
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
          <div className='login-background'>
            <Login />
          </div>
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
