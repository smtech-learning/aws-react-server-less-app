import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  }
}

export default App;
