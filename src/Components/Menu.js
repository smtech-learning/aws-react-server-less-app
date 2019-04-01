import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import '../Styles/Custom.css';

export default class Menu extends Component {
  render() {
    return (
     <div className="App-header">
            <NavLink to="/inventory"> Inventory </NavLink> |
            <NavLink to='/displayProducts'> Products Available </NavLink> |
            <NavLink to='/logout'> Logout</NavLink> |
            <NavLink to='/help'> Help</NavLink>
    </div>
    )
  }
}
