import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import FridgeContext from '../../../contexts/FridgeContext';
import './FridgeCategoryNav.css';

class FridgeCategoryNav extends Component {
    static contextType = FridgeContext;
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
                            <NavLink to={`/fridge/fridge-category/${category.id}`}>
                                {category.name}
                            </NavLink>
                        </h4>
                    </div>
                )
            })

        return (
            <div className="FridgeCategoryNav">
                {categories}
                <Link to="/fridge/add-fridge-category">
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