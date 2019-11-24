import React, { Component } from 'react';
import RecipeItem from './RecipeItem/RecipeItem';
import RecipeContext from '../../contexts/RecipeContext';
import RecipeApiService from '../../services/recipe-api-service';
import './Recipe.css';

class Recipe extends Component {
    static contextType = RecipeContext;

    componentDidMount() {
        this.context.clearError();
        RecipeApiService.getRecipes()
            .then(recipes => this.context.setRecipes(recipes))
            .catch(error => this.context.setError(error));
    }

    render() {
        const recipes = this.context.recipes.map((recipe, i) => 
            <RecipeItem recipe={recipe} key={i}/>
        )
        return (
            <div className="Recipe">
                <h2>Recipe</h2>
                {recipes}
            </div>
        );
    }
}

export default Recipe;