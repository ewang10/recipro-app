import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return (
            <div class="LoginForm wrapper">
                <form class="login_form">
                    <legend>Log in</legend>
                    <div class="username">
                        <label for="user">Username: </label>
                        <input name="user" id="user" required />
                    </div>
                    <div class="password">
                        <label for="pass">Password: </label>
                        <input name="pass" id="pass" required />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;