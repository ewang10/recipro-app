import React, { Component } from 'react';

const RecipeContext = React.createContext({
    recipes: [],
    setError: () => { },
    clearError: () => { },
    addRecipe: () => { },
    deleteRecipe: () => { },
    error: null,
    setRecipes: () => { },
    selectedRecipe: '',
    updateRecipe: () => { }
})

export default RecipeContext;

export class RecipeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            selectedRecipe: ''
        };
    }

    setError = error => {
        console.log(error);
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    setRecipes = recipes => {
        this.setState({ recipes })
    }

    addRecipe = recipe => {
        this.setState({
            recipes: [...this.state.recipes, recipe]
        });
    }

    deleteRecipe = recipeId => {
        const newRecipes = this.state.recipes.filter(recipe =>
            recipe.id !== recipeId
        );
        this.setState({ recipes: newRecipes });
    }

    updateSelectedRecipe = recipe => {
        this.setState({ selectedRecipe: recipe })
    }

    render() {
        const contextValue = {
            recipes: this.state.recipes,
            setError: this.setError,
            clearError: this.clearError,
            addRecipe: this.addRecipe,
            deleteRecipe: this.deleteRecipe,
            error: this.state.error,
            setRecipes: this.setRecipes,
            updateRecipe: this.updateSelectedRecipe,
            selectedRecipe: this.state.selectedRecipe
        }

        return (
            <RecipeContext.Provider value={contextValue}>
                {this.props.children}
            </RecipeContext.Provider>
        );
    }
}