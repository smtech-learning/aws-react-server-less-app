import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import DisplayProducts from './Components/DisplayProducts';
import Inventory from './Components/Inventory';
import Help from './Components/Help';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
              <Route path='/' exact component={Login} />
                <Route path='/home'  component={Home} />
                

          </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
