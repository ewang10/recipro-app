import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PantryContext from '../../../contexts/PantryContext';
import './CategoryNav.css';

class CategoryNav extends Component {
    static contextType = PantryContext;
    render() {
        const categories = this.context.categories
            .map((category, i) => {
                return (
                    <div 
                        className="category" 
                        key={i}
                        onClick={() => this.context.updateCategory(category)}
                    >
                        <h4>
                            <NavLink to={`/pantry-category/${category.id}`}>
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