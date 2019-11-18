import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm wrapper">
                <form className="login_form">
                    <legend>Log in</legend>
                    <div className="username">
                        <label htmlFor="user">Username: </label>
                        <input name="user" id="user" required />
                    </div>
                    <div className="password">
                        <label htmlFor="pass">Password: </label>
                        <input name="pass" id="pass" required />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;