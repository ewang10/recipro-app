import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

class BottomNav extends Component {
    render() {
        return (
            <nav className="nav-bottom">
                <div className="bottom_nav_wrapper">
                    <div className="nav">
                        <Link to="/pantry">Pantry</Link>
                    </div>
                    <div className="nav">
                        <Link to="/fridge">Fridge</Link>
                    </div>
                    <div className="nav">
                        <Link to="/grocery">Grocery</Link>
                    </div>
                    <div className="nav">
                        <Link to="/recipe">Recipe</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default BottomNav;