import React, { Component } from 'react';
import RecipeContext from '../../../contexts/RecipeContext';
import './RecipeDetail.css';

class RecipeDetail extends Component {
    static contextType = RecipeContext;
    render() {
        const { selectedRecipe } = this.context;

        const image =
            (selectedRecipe.image)
                ? <img src={selectedRecipe.image} alt={selectedRecipe.name} />
                : <img src="../../Utils/Images/No-image.png" alt="not available" />

        let ingredients;
        if (selectedRecipe.ingredients) {
            const recipeIngredients = selectedRecipe.ingredients.map((ingredient, i) =>
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
                    <a href={selectedRecipe.url} target="_blank" rel="noopener noreferrer">
                        {selectedRecipe.name}
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


export default RecipeDetail;