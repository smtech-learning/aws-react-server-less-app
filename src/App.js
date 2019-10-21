import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';


Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
              <Route path='/' exact component={Login} />
              <Route path='/home' component={Home} />
              <Route path='/register'  component={Register} />
          </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
//export default withAuthenticator(App, true);
 