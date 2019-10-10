import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import registration from '../Images/registration.png';

class REgister1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            phone_numbe:'',
            confirmation_code: '',
            signedup:false
        }
        this.handlechnage = this.handlechnage.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlesubmit(e) {
        e.preventDefault();
        const { username, password, email, phone_number ,signedup} = this.state;
        if (!signedup) {
            Auth.signUp({
                username,
                password,
                attributes: {
                    email,             // optional
                    phone_number,      // optional - E.164 number convention
                    // Other custom attributes...
                },
                validationData: [],  // optional
            })
                .then(data => {
                    console.log(data);
                    this.setState({ signedup: true });
                    this.setState({ password: '', email: '', phone_number: '' });
                })
                .catch(err => console.log(err));
        } else {
            const { username, confirmation_code } = this.state;
            Auth.confirmSignUp(username, confirmation_code, {
                // Optional. Force user confirmation irrespective of existing alias. By default set to True.
                forceAliasCreation: true
            }).then(data => {
                console.log(data);
                this.setState({ username: '', email: '', confirmation_code: '' });
            })
              .catch(err => console.log(err));
        }
    }

    handlechnage(e) {
        if (e.target.name === 'username') {
            this.setState({ username: e.target.value })
        } else if (e.target.name === 'password') {
            this.setState({ password: e.target.value })
            
        } else if (e.target.name === 'email') {
            this.setState({ email: e.target.value })
        } else if (e.target.name === 'phone_number') {
            this.setState({ phone_number: e.target.value })
        } else if (e.target.name === 'confirmation_code') {
            this.setState({ confirmation_code: e.target.value })
        }
    }

    render() {
        if (!this.state.signedup) {
            return (
                <div className="register-container">
                    <img src={registration} height="250px" />
                    <form onSubmit={this.handlesubmit} class="form-container">
                        <input type="text" className="login-style" name="username" placeholder="Enter User Name" onChange={this.handlechnage} />
                        <input type="password" className="login-style" name="password" placeholder="Enter Password" onChange={this.handlechnage} />
                        <input type="text" className="login-style" name="phone_number" placeholder="Enter Phone Number (eg: +1XXXXXXXXXX)" onChange={this.handlechnage} />
                        <input type="text" className="login-style" name="email" placeholder="Enter e-mail address" onChange={this.handlechnage} />
                        <button class="btn"> Submit  </button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="register-container">
                <img src={registration} height="250px" />
                    <form onSubmit={this.handlesubmit} class="form-container">
                    <input type="text" name="confirmation_code" className="login-style" placeholder="Enter Confirmation Code" onChange={this.handlechnage} />
                        <button class="btn"> Submit  </button>
                        <button class="btn"> Hey ! Go to Login Page !   </button>
                </form>
                </div>
            )
        }
  }
}

export default REgister1;