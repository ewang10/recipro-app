import React, { Component } from 'react';
import SearchItem from './SearchItem/SearchItem';
import RecipeContext from '../../contexts/RecipeContext';
import SearchRecipeApiService from '../../services/search-recipe-api-service';
import './RecipeSearch.css';

class RecipeSearch extends Component {
    static contextType = RecipeContext;
    constructor(props) {
        super(props);
        this.state = {
            STORE: [],
            searchResults: [],
            showList: false
        }
    }

    /*
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
    */
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
    /*
     displayResults(data) {
         $('#results-list').empty();
 
         //let button;
         for (let i = 0; i < data.hits.length; i++) {
             console.log('inside for loop')
             */
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
    /*
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

 console.log('STORE length ', this.STORE.length)
}
*/
    addRecipeToStore(recipe) {
        this.setState({ STORE: [...this.state.STORE, recipe] })
    }

    resultList = () => {
        const { searchResults } = this.state;
        const list = searchResults.map((item, i) =>
            <SearchItem
                key={i}
                item={item}
                updateStore={recipe => this.addRecipeToStore(recipe)}
            />
        );
        return list;
    }

    handleSearch(event) {
        event.preventDefault();

        //set error to null
        const { search } = event.target;

        SearchRecipeApiService.getRecipes(search.value)
            .then(data => {
                //console.log(data);
                this.setState({ 
                    searchResults: data.hits ,
                    showList: true
                });

                //image data.hits[i].recipe.image
                //name data.hits[i].recipe.label
                //url data.hits[i].recipe.url
                //ingredients data.hits[i].recipe.ingredientLines
            })
    }

    //$(getRecipeToSave);
    getInitialListState = () => {
        this.setState({showList: false});
    }

    render() {
        this.getInitialListState();
        const className = this.state.showList ? "" : "hidden";
        return (
            <section className="wrapper">
                    <form
                        className="recipe_search"
                        onSubmit={e => this.handleSearch(e)}
                    >
                        <label htmlFor="search">Find something to cook</label>
                        <input name="search" id="search"
                            placeholder="e.g. chicken, thyme, milk..." required />
                        <button type="submit">Search</button>
                    </form>
                    <section id="results" className={className}>
                        <ul id="results-list">
                            {this.state.searchResults.length && this.resultList()}
                        </ul>
                    </section>
            </section>
        );
    }
}

export default RecipeSearch;