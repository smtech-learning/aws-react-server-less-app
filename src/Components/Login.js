import React, { Component } from 'react';
import '../Styles/Custom.css';
import cloud from '../Images/cloud.png';
import cloudpepper from '../Images/cloud-pepper.png';
import serverlessarch from '../Images/server-less-arch.png';
import { Route, NavLink, Switch } from 'react-router-dom';

class Login extends Component {

    PageLogin = (e) => {
        console.log('testing');
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
                    <button className="btn btn-primary" onClick={this.PageLogin}> Go !</button>
                </div>         
            </div>
      </div>
    )
  }
}
export default Login;
