import React, { Component } from 'react';
import $ from 'jquery';
import config from '../../config';
import TokenService from '../../services/token-service';
import RecipeContext from '../../contexts/RecipeContext';
import RecipeApiService from '../../services/recipe-api-service';
import './RecipeSearch.css';

class RecipeSearch extends Component {
    static contextType = RecipeContext;
    STORE = [];

    saveRecipe(recipe) {
        this.context.clearError();
        RecipeApiService.postRecipe(recipe)
            .then(recipe => {
                this.context.addRecipe(recipe);
            })
            .catch(error => this.context.setError(error));
    }

    
    getRecipeToSave() {
        const recipels = this.STORE;
        let recipe;
        $('#results-list').on('click', '.save-recipe', function (event) {
            const recipeId = $(this).closest('li').find('.save-recipe').attr('id');

            for (let i = 0; i < recipels.length; i++) {
                if (recipels[i].id === recipeId) {
                    recipe = {
                        name: recipels[i].name,
                        image: recipels[i].image,
                        url: recipels[i].url,
                        ingredients: recipels[i].ingredients
                    };
                }
            }
        });

        if (recipe) {
            this.saveRecipe(recipe);
        }
    }
    
    /*
    getRecipeToSave(id) {
        let recipe;
        for (let i = 0; i < this.STORE.length; i++) {
            if (this.STORE[i].id === id) {
                recipe = {
                    name: this.STORE[i].name,
                    image: this.STORE[i].image,
                    url: this.STORE[i].url,
                    ingredients: this.STORE[i].ingredients
                };
            }
        }
        if (recipe) {
            this.saveRecipe(recipe);
        }
    }
    */
    displayResults(data) {
        $('#results-list').empty();

        //let button;
        for (let i = 0; i < data.hits.length; i++) {
            console.log('inside for loop')
            /*
            if (TokenService.hasAuthToken()) {
                button = (
                    <button
                        type='button'
                        class="save-recipe"
                        onClick={() => this.getRecipeToSave(`r${i}`)}
                    >
                        Save
                    </button>
                )
                    
            } else {
                button = '';
            }
            */
            $('#results-list').append(
                `<li>
                    <div class='recipe-results' id='r${i}'>
                        <h4>
                            <a href=${data.hits[i].recipe.url}>
                            ${data.hits[i].recipe.label}
                            </a>
                        </h4>
                    </div>
                </li>`
            );

            this.STORE.push({
                id: `r${i}`,
                name: data.hits[i].recipe.label,
                image: data.hits[i].recipe.image,
                url: data.hits[i].recipe.url,
                ingredients: data.hits[i].recipe.ingredientLines
            });
        }
        //$('#results').removeClass('hidden');

        if (TokenService.hasAuthToken()) {

            $('.recipe-results').append(`
                <button type='button' class="save-recipe">
                    Save
                </button>
            `);
        }
        $('#results').removeClass('hidden');

        //console.log('STORE length ', this.STORE.length)
    }

    formatQueryString(params) {
        const queryItems = Object.keys(params).map(key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        );
        return queryItems.join('&');
    }
    handleSearch(event) {
        event.preventDefault();
        //set error to null
        const { search } = event.target;
        const params = {
            app_id: config.EDAMAM_ID,
            app_key: config.EDAMAM_KEY,
            q: search.value.split(",")
        }
        const queryString = this.formatQueryString(params);
        let searchUrl = 'https://api.edamam.com/search?' + queryString;

        fetch(searchUrl)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                console.log(data);
                this.displayResults(data);
                //image data.hits[i].recipe.image
                //name data.hits[i].recipe.label
                //url data.hits[i].recipe.url
                //ingredients data.hits[i].recipe.ingredientLines
            })
    }

    //$(getRecipeToSave);

    render() {
        return (
            <section className="wrapper">
                <div className="">
                    <form
                        className="recipe_search"
                        onSubmit={e => this.handleSearch(e)}
                    >
                        <label htmlFor="search">Find something to cook</label>
                        <input name="search" id="search"
                            placeholder="e.g. chicken, thyme, milk..." required />
                        <button type="submit">Search</button>
                    </form>
                    <section id="results" className="hidden">
                        <ul id="results-list"></ul>
                    </section>
                </div>
            </section>
        );
    }
}

export default RecipeSearch;