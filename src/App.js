import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import LoginNextGen from "./Components/LoginNextGen";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import {
  BrowserRouter,
  Route,
  NavLink,
  withRouter,
  Switch
} from "react-router-dom";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LoginNextGen} />
          <Route path='/login' exact component={LoginNextGen} />
          <Route path='/register' component={LoginNextGen} />
          <Route path='/architecture' component={LoginNextGen} />
          <Route path='/services' component={LoginNextGen} />
          <Route path='/help' exact component={LoginNextGen} />
          <Route path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
//export default withAuthenticator(App, true);
