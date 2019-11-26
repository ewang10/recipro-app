import React, { Component } from 'react';
import RecipeContext from '../../../contexts/RecipeContext';
import '../../Recipe/RecipeDetail/RecipeDetail.css';

class SelectedRecipe extends Component {
    static contextType = RecipeContext;
    render() {
        const { selectedSearchRecipe } = this.context;

        const image =
            (selectedSearchRecipe.image)
                ? <img src={selectedSearchRecipe.image} alt={selectedSearchRecipe.name} />
                : <img src="../../Utils/Images/No-image.png" alt="not available" />
        
        let ingredients;
        if (selectedSearchRecipe.ingredients) {
            const recipeIngredients = selectedSearchRecipe.ingredientLines.map((ingredient, i) =>
                <li key={i}>
                    {ingredient}
                </li>
            );
            ingredients = <ul>{recipeIngredients}</ul>

        } else {
            ingredients = 'No ingredients available';
        }

        return (
            <div className="RecipeDetail">
                <h4>
                    <a href={selectedSearchRecipe.url} target="_blank" rel="noopener noreferrer">
                        {selectedSearchRecipe.label}
                    </a>
                </h4>
                <div className="img-container">
                    {image}
                </div>
                <div className="ingredients">
                    <h6>Ingredients</h6>
                    {ingredients}
                </div>
            </div>
        );
    }
}


export default SelectedRecipe;