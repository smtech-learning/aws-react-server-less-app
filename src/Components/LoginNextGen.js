import React from "react";
import PreloginNavigation from "./PreloginNavigation";
import PreLoginBody from "./PreLoginBody";
import { Switch, Route } from "react-router-dom";
import Login from "../Components/Login";
import NoMatch from "../Components/NoMatch";

export default function LoginNextGen() {
  return (
    <div className='login-container'>
      <div className='header-item'>
        <PreloginNavigation />
      </div>
      <Switch>
        <Route path='/' exact>
          <div className='body-item'>
            <PreLoginBody />
          </div>
        </Route>
        <Route path='/login'>
          <NoMatch />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>

      <div className='footer-item'> Footer</div>
    </div>
  );
}
