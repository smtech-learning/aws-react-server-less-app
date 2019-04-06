import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import '../Styles/Custom.css';
import { browserHistory as history} from 'history';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    
  }

  callLogout(e) {
    e.preventDefault();
    this.props.history.push("/");
  }
    
  
  render() {
    return (
      <span className="App-header">
        <span id="span-menu-item1">
            <NavLink to="/home/inventory" activeStyle={{ color: 'white' }}> Inventory </NavLink> 
        </span> 
        <span id="span-menu-item2">
            <NavLink to='/home/displayProducts' activeStyle = {{color:'white'}}> Products Available </NavLink> 
        </span> 
       
        <span id="span-menu-item3">
            <NavLink to='/home/help' activeStyle={{ color: 'white' }}> Help</NavLink>
        </span> 
          
        <span id="span-menu-item4">
          <NavLink to='/' activeStyle={{ color: 'white' }}> Logout</NavLink> 
        </span> 
       
    </span>
    )
  }
}
