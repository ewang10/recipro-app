import React, { Component } from 'react';
import TokenService from '../../../services/token-service';
import RecipeContext from '../../../contexts/RecipeContext';
import RecipeApiService from '../../../services/recipe-api-service';
import './SearchItem.css';

export default class SearchItem extends Component {

    static contextType = RecipeContext;

    saveRecipe = () => {
        const { item } = this.props;
        const recipe = {
            name: item.recipe.label,
            image: item.recipe.image,
            url: item.recipe.url,
            ingredients: item.recipe.ingredientLines
        };
        this.context.clearError();
        RecipeApiService.postRecipe(recipe)
            .then(recipe => {
                this.context.addRecipe(recipe);
            })
            .catch(error => this.context.setError(error));
    }



    render() {
        const { item } = this.props;
        const button = (TokenService.hasAuthToken())
            ? (<button
                type='button'
                onClick={this.saveRecipe}
            >
                Save
            </button>)
            : '';
        return (
            <div className='SearchItem'>
                <h4>{item.recipe.label}</h4>
                {button}
            </div>
        );
    }
}

SearchItem.defaultProps = {
    item: {}
}