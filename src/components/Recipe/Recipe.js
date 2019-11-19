import React, { Component } from 'react';
import RecipeItem from './RecipeItem/RecipeItem';
import './Recipe.css';

class Recipe extends Component {
    recipes = [
        {
            id: 1,
            name: "Chicken Vesuvio",
            image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
            url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
            ingredients: [
                "1/2 cup olive oil",
                "5 cloves garlic, peeled",
                "2 large russet potatoes, peeled and cut into chunks",
                "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                "3/4 cup white wine",
                "3/4 cup chicken stock",
                "3 tablespoons chopped parsley",
                "1 tablespoon dried oregano",
                "Salt and pepper",
                "1 cup frozen peas, thawed"
            ]
        }, {
            id: 2,
            name: "Chicken Vesuvio",
            image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
            url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
            ingredients: [
                "1/2 cup olive oil",
                "5 cloves garlic, peeled",
                "2 large russet potatoes, peeled and cut into chunks",
                "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                "3/4 cup white wine",
                "3/4 cup chicken stock",
                "3 tablespoons chopped parsley",
                "1 tablespoon dried oregano",
                "Salt and pepper",
                "1 cup frozen peas, thawed"
            ]
        }, {
            id: 3,
            name: "Chicken Vesuvio",
            image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
            url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
            ingredients: [
                "1/2 cup olive oil",
                "5 cloves garlic, peeled",
                "2 large russet potatoes, peeled and cut into chunks",
                "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
                "3/4 cup white wine",
                "3/4 cup chicken stock",
                "3 tablespoons chopped parsley",
                "1 tablespoon dried oregano",
                "Salt and pepper",
                "1 cup frozen peas, thawed"
            ]
        }
    ];
    render() {
        const recipes = this.recipes.map((recipe, i) => 
            <RecipeItem recipe={recipe} key={i}/>
        )
        return (
            <div className="Recipe">
                {recipes}
            </div>
        );
    }
}

export default Recipe;