import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
              <Route path='/' exact component={Login} />
              <Route path='/home' exact component={Home} />
            
          </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
