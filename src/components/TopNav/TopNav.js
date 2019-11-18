import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

class TopNav extends Component {
    render() {
        return (
            <nav className="nav-top">
                <h1><Link to="/">ReciPro</Link></h1>
                <div className="sign_up_in">
                    <Link to="/register" className="sign_up">Sign up</Link>
                    <Link to="/login" className="sign_in">Sign in</Link>
                </div>
            </nav>
        );
    }
}

export default TopNav;
