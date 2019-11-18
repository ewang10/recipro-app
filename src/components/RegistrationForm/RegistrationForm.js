import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
    render() {
        return (
            <div className="RegistrationForm wrapper">
                <form className="registration_form">
                    <legend>Sign up</legend>
                    <div className="username">
                        <label htmlFor="user">Username: </label>
                        <input name="user" id="user" required />
                    </div>
                    <div className="password">
                        <label htmlFor="pass">Password: </label>
                        <input name="pass" id="pass" required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;