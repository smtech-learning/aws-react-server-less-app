import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import registration from '../Images/registration.png';


const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}
class REgister1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone_numbe:'',
            confirmation_code: '',
            signedup: false,
            confirmed: false,
            errors: {
                fullName: '',
                username: '',
                email: '',
                password: '',
                phone_number:''
            }
        }
        this.handlesubmit = this.handlesubmit.bind(this);
    

      }
    
    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        switch (name) {
          case 'username': 
            errors.username = 
            validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
                break;
            
            case 'phone_number': 
                errors.phone_number = 
                  validEmailRegex.test(value)
                    ? ''
                    : 'Phone Number is not valid!';
                break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default: console.log('testing here');
            break;
        }
    
        this.setState({errors, [name]: value});
      }
    
      handleSubmit1 = (event) => {
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
      }
    
      handlesubmit(e) {
        e.preventDefault();
        const { username, password, email, phone_number ,signedup,confirmed} = this.state;
        if (!signedup && !confirmed) {
            Auth.signUp({
                username,
                password,
                attributes: {
                    email,            
                    phone_number,      
                },
                validationData: [],  
            })
                .then(data => {
                    console.log(data);
                    this.setState({ signedup: true });
                    this.setState({ password: '', email: '', phone_number: '' });
                })
                .catch(err => {
                    this.setState({ hasError: true });
                    this.setState({ errorDescription: err.message });
                }
                );
        } else if (signedup && !confirmed) {
            const { username, confirmation_code } = this.state;
            Auth.confirmSignUp(username, confirmation_code, {
                forceAliasCreation: true
            }).then(data => {
                this.setState({ confirmed: true });
                this.setState({ username: '', email: '', confirmation_code: '' });
            })
                .catch(err => {
                    this.setState({ hasError: true });
                    this.setState({ errorDescription: err.message });
                });
        } else if (signedup && confirmed) {

        }
    }

      render() {
        if (!this.state.signedup) {
            const {errors} = this.state;
    
                return (
                    <div className="register-container">
                        <img src={registration} height="250px" />
                        
                        <form onSubmit={this.handlesubmit} class="form-container" autoComplete="off">
                        <input id="_suburb" type="text" style={{ display: 'none' }} disabled />
                        
                            {this.state.hasError && <h5 className="errorStyle"> {this.state.errorDescription}</h5>}
                            
                            <input type="text" autocomplete="off_randomstring"
                                className="login-style" name="username" placeholder="Enter e-mail address" 
                                onChange={this.handleChange} />
                            
                              
                            
                                {errors.username.length > 0 && 
                                    <span className='error'>{errors.username}</span>}
                            
                            <input type="text" autocomplete="off_randomstring"
                                className="login-style" name="email" placeholder="Renter the e-mail address"
                                onChange={this.handleChange} />
                            
                                {errors.email.length > 0 && 
                                    <span className='error'>{errors.email}</span>}
                            
                            <input type="password" autocomplete="new-password"
                                className="login-style" name="password" placeholder="Enter Password"
                                onChange={this.handleChange} />
                            
                                {errors.password.length > 0 && 
                                    <span className='error'>{errors.password}</span>}
                            
                            <input type="text" autocomplete="off_randomstring"
                                className="login-style" name="phone_number"
                                placeholder="Enter Phone Number (Format should be: +1XXXXXXXXXX)"
                                onChange={this.handleChange} />
                            
                                {errors.phone_number.length > 0 && 
                                <span className='error'>{errors.phone_number}</span>}
                            
                            <br/>
                            <button className="btn btn-primary"> Submit  </button>
                        </form>
                    </div>
                )
            } else if (this.state.signedup && !this.state.confirmed) {
                return (
                    <div className="register-container">
                        <img src={registration} height="250px" />
                        <form onSubmit={this.handlesubmit} class="form-container">
                            <h5> You should have received the verification code in the e-mail.
                            Plese check the e-mail and enter the verification code below and click Submit !</h5>
                            {this.state.hasError && <h5 className="errorStyle"> {this.state.errorDescription}</h5>}
    
                            <input type="text" name="confirmation_code" className="login-style" placeholder="Enter Verification Code" onChange={this.handleChange} />
                            <br />
                            <button className="btn btn-primary"> Submit  </button>
                        </form>
                    </div>
                )
            } else if (this.state.signedup && this.state.confirmed) {
                return (
                    <div className="register-container">
                        <img src={registration} height="250px" />
                        <div className="form-container"> 
                            <h3> Congratulations !! Registration successfully completed. </h3>
                            <br />
                            <button className="btn btn-primary"> Go to Login Page  </button>
                        </div>
                    </div> 
                )
            }
      }
}

export default REgister1;