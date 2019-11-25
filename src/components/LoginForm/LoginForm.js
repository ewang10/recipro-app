import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ error: null });

        const { user, pass } = event.target;

        AuthApiService.postLogin({
            user_name: user.value,
            password: pass.value
        })
            .then(() => {
                user.value = '';
                pass.value = '';
                this.props.history.push('/seach-recipe');
                window.location.reload(false);
            })
            .catch(res => {
                this.setState({ error: res.error })
            });
    }

    render() {
        const { error } = this.state;
        return (
            <div className="LoginForm wrapper">
                <form 
                    className="login_form"
                    onSubmit={event => this.handleSubmit(event)}
                >
                    <legend>Log in</legend>
                    <div className='alert'>
                        {error && <p className='error'>{error}</p>}
                    </div>
                    <div className="username">
                        <label htmlFor="user">Username: </label>
                        <input name="user" id="user" required />
                    </div>
                    <div className="password">
                        <label htmlFor="pass">Password: </label>
                        <input type="password" name="pass" id="pass" required />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;