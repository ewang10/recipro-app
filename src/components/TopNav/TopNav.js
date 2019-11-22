import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import './TopNav.css';

class TopNav extends Component {
    handleLogout() {
        TokenService.clearAuthToken();
        // Clear callback go refresh api, and unregister event listners
        // that tracks user interactivity
        TokenService.clearCallbackBeforeExpiry();
        IdleService.unRegisterIdleResets();
        window.location.reload(false);
    }

    logoutLink() {
        return (
            <div className="sign_out">
                <Link
                    to="/"
                    className="logout"
                    onClick={() => this.handleLogout()}
                >Logout</Link>
            </div>
        );
    }
    loginLink() {
        return (
            <div className="sign_up_in">
                <Link to="/register" className="sign_up">Sign up</Link>
                <Link to="/login" className="sign_in">Sign in</Link>
            </div>
        );
    }
    render() {
        return (
            <nav className="nav-top">
                <h1><Link to="/">ReciPro</Link></h1>
                {
                    TokenService.hasAuthToken()
                        ? this.logoutLink()
                        : this.loginLink()
                }
            </nav>
        );
    }
}

export default TopNav;
