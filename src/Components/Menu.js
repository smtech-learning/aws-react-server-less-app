import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import '../Styles/Custom.css';

export default class Menu extends Component {
  render() {
    return (
     <div className="App-header">
            <NavLink to="/home/inventory" activeStyle = {{color:'white'}}> Inventory </NavLink> |
            <NavLink to='/home/displayProducts' activeStyle = {{color:'white'}}> Products Available </NavLink> |
            <NavLink to='/home/logout' activeStyle = {{color:'white'}}> Logout</NavLink> |
            <NavLink to='/home/help' activeStyle = {{color:'white'}}> Help</NavLink>
    </div>
    )
  }
}
