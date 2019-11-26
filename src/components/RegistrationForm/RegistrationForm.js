import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

class RegistrationForm extends Component {
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

        AuthApiService.postUser({
            user_name: user.value,
            password: pass.value
        })
            .then(() => {
                user.value = '';
                pass.value = '';
                this.props.history.push('/login');
            })
            .catch(res => {
                this.setState({ error: res.error })
            });
    }

    render() {
        const { error } = this.state;
        return (
            <section className="registration-background">
                <div className="RegistrationForm wrapper">
                    <form
                        className="registration_form"
                        onSubmit={event => this.handleSubmit(event)}
                    >
                        <legend>Sign up</legend>
                        <div className='alert'>
                            {error && <p className='error'>{error}</p>}
                        </div>
                        <div className="username">
                            <label htmlFor="user">Username: </label>
                            <input name="user" id="user" required />
                        </div>
                        <div className="password">
                            <label htmlFor="pass">Password: {" "}</label>
                            <input type="password" name="pass" id="pass" required />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default RegistrationForm;