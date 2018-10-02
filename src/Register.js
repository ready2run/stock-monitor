import React, { Component } from 'react';
import classNames from 'classnames';
import validator from 'validator';

class Register extends Component{

    
    formDefaults = {
        email: { value: '', isValid: true, message: '' },
        password: { value:'', isValid: true, message: '' },
        confirmPassword: { value: '', isValid: true, message: '' }
      };

    state = { ...this.formDefaults}


    handleSubmit = (e) =>{
        e.preventDefault();
        this.resetValidationState();
        if (this.formIsValid()) {
            // form processing here....
        }
    }

    handleOnchange = (e) =>{
        
        const state = {
            ...this.state,
            [e.target.name]: {
              ...this.state[e.target.name],
              value: e.target.value,
            }
          };
    
          this.setState(state);
    }

    resetValidationState = () => {
        const state = this.state;
        Object.keys(state).map(key => {
            if(state[key].hasOwnProperty('isValid')){
                state[key].isValid = true;
                state[key].message = '';
            }

        });
        this.setState(state);
    }

    formIsValid = () => {
        const email = { ...this.state.email };
        const password = { ...this.state.password };
        const confirmPassword = { ...this.state.confirmPassword };
        let isGood = true;
  
        if (!validator.isEmail(email.value)) {
          email.isValid = false;
          email.message = 'Not a valid email address';
          isGood = false;
        }

        if (password.value !== confirmPassword.value) {
            password.isValid = false;
            password.message = 'Password and Confirm Password do not match.';
            isGood = false;
          }

        if (!isGood) {
            this.setState({
              email,
              password,
              confirmPassword,
            });
          }
    
          return isGood;
    }

    renderRegistrationForm = () =>{
        const { email, password, confirmPassword } = this.state;
        /*
        Each of the group classes below will include the 'form-group' class,
        and will only 'has-error' class if the isValid value is false.
        */
        const emailGroupClass = classNames('form-group',
            { 'has-error': !email.isValid }
        );
        const passwordGroupClass = classNames('form-group',
            { 'has-error': !password.isValid }
        );
        const confirmGroupClass = classNames('form-group',
            { 'has-error': !confirmPassword.isValid }
        );

        return (
            <div className="container">
            <form
              className="form-signin"
              onSubmit={this.handleSubmit}
            >
              <h2 className="form-signin-heading">
                Register User
              </h2>

              <div className={emailGroupClass}>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email.value}
                  onChange={this.handleOnchange}
                  autoFocus 
                  required
                />
                <span className="help-block">{email.message}</span>
              </div>

              <div className={passwordGroupClass}>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password.value}
                  onChange={this.handleOnchange} 
                  required
                />
                <span className="help-block">{password.message}</span>
              </div>

              <div className={confirmGroupClass}>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword.value} 
                  required
                  onChange={this.handleOnchange}
                />
                <span className="help-block">{confirmPassword.message}</span>
              </div>

              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
        );
    }

    render = () => {
        return (        
          this.renderRegistrationForm()   
        );
    }
}

export default Register;