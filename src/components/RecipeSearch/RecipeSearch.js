import React, { Component } from 'react';
import $ from 'jquery';
import TokenService from '../../services/token-service';
import './RecipeSearch.css';

class RecipeSearch extends Component {

    STORE = [];

    displayResults(data) {
        $('#results-list').empty();
        for (let i = 0; i < data.hits.length; i++) {
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
        if(TokenService.hasAuthToken()) {
            $('.recipe-results').append(`
                <button type='button'>
                    Save
                </button>
            `);
        }
        $('#results').removeClass('hidden');
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
            app_id: 'b6e53abc',
            app_key: '17a3d9cf41f07f362212354c21fe6dfd',
            q: search.value.split(",")
        }
        const queryString = this.formatQueryString(params);
        let searchUrl = 'https://api.edamam.com/search' + '?' + queryString;

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