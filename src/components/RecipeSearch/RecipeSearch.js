import React, { Component } from 'react';
import SearchItem from './SearchItem/SearchItem';

import SearchRecipeApiService from '../../services/search-recipe-api-service';
import './RecipeSearch.css';

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            showList: false,
            noResults: false
        }
    }

    resultList = () => {
        const { searchResults } = this.state;
        const list = searchResults.map((item, i) =>
            <SearchItem
                key={i}
                item={item}
            />
        );
        return list;
    }

    handleSearch(event) {
        event.preventDefault();
        const { search } = event.target;

        SearchRecipeApiService.getRecipes(search.value)
            .then(data => {
                this.setState({ searchResults: data.hits });

                if (this.state.searchResults.length !== 0) {
                    //console.log('show list true ', this.state.searchResults)
                    this.setState({ showList: true })
                } else {
                    //console.log('no results')
                    this.setState({ noResults: true })
                }
            })
            .catch(error => console.log(error));
    }

    //$(getRecipeToSave);
    componentDidMount() {
        this.setState({
            showList: false,
            noResults: false
        });
    }

    render() {
        const className = this.state.showList ? "" : "hidden";
        return (
            <section className="backgroundImg wrapper">
                <form
                    className="recipe_search"
                    onSubmit={e => this.handleSearch(e)}
                >
                    <label htmlFor="search">Find something to cook</label>
                    <input name="search" id="search"
                        placeholder="e.g. chicken, thyme, milk..." required />
                    <button type="submit">Search</button>
                </form>
                {this.state.noResults && (this.state.searchResults.length === 0) &&
                    <p className="no-results">No results available</p>}
                <section id="results" className={className}>
                    <ul id="results-list">
                        {(this.state.noResults === false) &&
                            this.state.searchResults.length &&
                            this.resultList()}
                    </ul>
                </section>
            </section>
        );
    }
}

export default RecipeSearch;