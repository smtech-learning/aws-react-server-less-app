import React, { Component } from 'react';
import '../Styles/Custom.css';
import cloud from '../Images/cloud.png';
import serverlessarch from '../Images/server-less-arch.png';
import { Route, NavLink, Switch } from 'react-router-dom';
import { browserHistory } from 'history'
import { Auth } from "aws-amplify";

class Login extends Component {

    constructor(props) {
      super(props); 
      this.PageLogin = this.PageLogin.bind(this); 
      this.handlechnage = this.handlechnage.bind(this);
      this.state = {
        password: '',
        email: ''
    }
    }
  
    handlechnage(e) {
      if (e.target.name === 'email') {
        console.log(e.target.value);

          this.setState({ email: e.target.value })
      } else if (e.target.name === 'password') {
        console.log(e.target.value);

          this.setState({ password: e.target.value })
          
        }
  }
  
    async    PageLogin(e) {
      e.preventDefault();
      try {
        await Auth.signIn(this.state.email, this.state.password);
        this.props.history.push("/home");
      } catch (e) {
        console.log('not able to login');
      }
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
              <input onChange={this.handlechnage} className="login-style" type="text" name ="email" id ="email" placeholder="Enter e-mail address"/> <br />  <br />  
              <input onChange={this.handlechnage}  className="login-style"      type="password" name="password" id="password"  placeholder="Enter Password"/>  <br />   <br />  
              <NavLink className="btn btn-primary"> <div onClick={this.PageLogin}> Confirm Identity &amp; Go ! </div></NavLink> -OR- &nbsp; 
              <NavLink className="btn btn-primary" to = "/register" > Sign-up !</NavLink>
                </div>         
            </div>
      </div>
    )
  }
}
export default Login;

