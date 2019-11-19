import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RecipeItem.css';

class RecipeItem extends Component {
    render() {
        return (
            <div className="RecipeItem">
                <h4>
                    <Link to={`/recipe-item/${this.props.recipe.id}`}>
                        {this.props.recipe.name}
                    </Link>
                </h4>
                <button type="button">Delete</button>
            </div>
        );
    }
}

export default RecipeItem;