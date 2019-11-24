import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../../../contexts/RecipeContext';
import RecipeApiService from '../../../services/recipe-api-service';
import './RecipeItem.css';

class RecipeItem extends Component {
    static contextType = RecipeContext;
    deleteRecipe(recipeId, cb) {
        this.context.clearError();
        RecipeApiService.deleteRecipe(recipeId)
            .then(() => {
                cb(recipeId);
            })
            .catch(error => this.context.setError(error));
    }

    render() {
        return (
            <div className="RecipeItem">
                <h4 onClick={() => this.context.updateRecipe(this.props.recipe)}>
                    <Link to={`/recipe-item/${this.props.recipe.id}`}>
                        {this.props.recipe.name}
                    </Link>
                </h4>
                <button 
                    type="button"
                    onClick={() => this.deleteRecipe(
                        this.props.recipe.id,
                        this.context.deleteRecipe
                    )}
                >
                    Delete
                </button>
            </div>
        );
    }
}

RecipeItem.defaultProps = {
    recipe: {}
}

export default RecipeItem;