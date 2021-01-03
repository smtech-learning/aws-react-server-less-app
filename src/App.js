import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import LoginNextGen from "./Components/LoginNextGen";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {
  BrowserRouter,
  Route,
  NavLink,
  withRouter,
  Switch
} from "react-router-dom";

Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
     
      <div> 
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LoginNextGen} />
          <Route path='/login' exact component={LoginNextGen} />
          <Route path='/register' component={LoginNextGen} />
          <Route path='/architecture' component={LoginNextGen} />
          <Route path='/forgotpassword' component={LoginNextGen} />
          <Route path='/services' component={LoginNextGen} />
          <Route path='/help' component={LoginNextGen} />
          <Route path='/home' component={Home} />
        </Switch>
        </BrowserRouter>
      
        </div>
        
    );
  }
}


export default App;
//export default withAuthenticator(App);
//AmplifyAuthenticator
