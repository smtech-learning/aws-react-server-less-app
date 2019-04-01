import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import '../Styles/Custom.css';

export default class Menu extends Component {
  render() {
    return (
     <div className="App-header">
            <NavLink to="/home/inventory"> Inventory </NavLink> |
            <NavLink to='/home/displayProducts'> Products Available </NavLink> |
            <NavLink to='/home/logout'> Logout</NavLink> |
            <NavLink to='/home/help'> Help</NavLink>
    </div>
    )
  }
}
