import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './RecipeDetail.css';

class RecipeDetail extends Component {
    render() {
        //console.log('match ', this.props.match.params.recipe_id)
        const recipe = this.props.recipes.find(recipe =>
            recipe.id === parseInt(this.props.match.params.recipe_id));
        const ingredients = recipe.ingredients.map((ingredient, i) =>
            <li key={i}>
                {ingredient}
            </li>
        );
        //console.log(recipe);
        return (
            <div className="RecipeDetail">
                <h4><a href={recipe.url}>{recipe.name}</a></h4>
                <div className="img-container">
                    <img src={recipe.image} alt={recipe.name}/>
                </div>
                <div className="ingredients">
                    <h6>Ingredients</h6>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(RecipeDetail);