import React, { Component } from 'react';
import RecipeContext from '../../../contexts/RecipeContext';
import '../../Recipe/RecipeDetail/RecipeDetail.css';

class SelectedRecipe extends Component {
    static contextType = RecipeContext;
    render() {
        const { selectedSearchRecipe } = this.context;
        //console.log('selected recipe iss ', selectedRecipe)
        const image =
            (selectedSearchRecipe.image)
                ? <img src={selectedSearchRecipe.image} alt={selectedSearchRecipe.name} />
                : <img src="../../Utils/Images/No-image.png" alt="not available" />
        //console.log('match ', this.props.match.params.recipe_id)
        //const recipe = this.props.recipes.find(recipe =>
        //    recipe.id === parseInt(this.props.match.params.recipe_id));
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
        //console.log(recipe);
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