import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './CategoryNav.css';

class CategoryNav extends Component {
    render() {
        const categories = this.props.categories
            .map((category, i) => {
                return (
                    <div className="category" key={i}>
                        <h4>
                            <NavLink to={`/pantry/pantry-category/${category.id}`}>
                                {category.name}
                            </NavLink>
                        </h4>
                    </div>
                )
            })

        return (
            <div className="CategoryNav">
                {categories}
                <Link to="/add-pantry-category">
                    <button>
                        + Category
                    </button>
                </Link>
            </div>
        );
    }
}

CategoryNav.defaultProps = {
    categories: []
}

export default CategoryNav;