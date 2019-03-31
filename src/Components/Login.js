import React, { Component } from 'react';
import '../Styles/Custom.css';
import cloud from '../Images/cloud.png';
import cloudpepper from '../Images/sitelogo.png';
import serverlessarch from '../Images/server-less-arch.png';
import { Route, NavLink, Switch } from 'react-router-dom';
import { browserHistory } from 'history'

class Login extends Component {

    constructor(props) {
        super(props); 
            this.PageLogin = this.PageLogin.bind(this); 
    }

    PageLogin(e) {
        e.preventDefault();
        this.props.history.push("/home");
    }
  render() {
      return (
        <div className="my-own-container">
            <div className="left-pannel" id ="over">
                <img src={cloud} className="image-size-min"/> <br /> 
                <img src={serverlessarch} className="image-size-medium"/>
            </div>

            <div className="right-pannel">
                <div className="center-login-section">  
                    <input className="login-style" type="text" name ="login" id ="login" placeholder="Type login id"/> <br />  <br />  
                    <input className="login-style"      type="password" name="password" id="password"  placeholder="Type password"/>  <br />   <br />  
                    <NavLink className="btn btn-primary" to = "/home" > Confirm Identity &amp; Go !</NavLink>
                </div>         
            </div>
      </div>
    )
  }
}
export default Login;

