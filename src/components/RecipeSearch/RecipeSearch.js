import React, { Component } from 'react';
import './RecipeSearch.css';

class RecipeSearch extends Component {
    render() {
        return (
            <section className="wrapper">
                <div className="center">
                    <form className="recipe_search">
                        <label htmlFor="search">Find something to cook</label>
                        <input name="search" id="search" 
                            placeholder="e.g. chicken, thyme, milk..." required />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default RecipeSearch;