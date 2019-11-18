import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './FridgeCategoryNav.css';

class FridgeCategoryNav extends Component {
    render() {
        const categories = this.props.categories
            .map((category, i) => {
                return (
                    <div className="category" key={i}>
                        <h4>
                            <NavLink to={`/fridge-category/${category.id}`}>
                                {category.name}
                            </NavLink>
                        </h4>
                    </div>
                )
            })

        return (
            <div className="FridgeCategoryNav">
                {categories}
                <Link to="/add-fridge-category">
                    <button>
                        + Category
                    </button>
                </Link>
            </div>
        );
    }
}

FridgeCategoryNav.defaultProps = {
    categories: []
}

export default FridgeCategoryNav;