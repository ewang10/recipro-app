import React, { Component } from 'react';

const GroceryContext = React.createContext({
    groceries: [],
    setError: () => { },
    clearError: () => { },
    addGrocery: () => { },
    deleteGrocery: () => { },
    error: null,
    setGroceries: () => { }
});

export default GroceryContext;

export class GroceryProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceries: []
        }
    }

    setError = error => {
        console.log(error);
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    setGroceries = groceries => {
        this.setState({ groceries });
    }

    addGrocery = grocery => {
        this.setState({
            groceries: [...this.state.groceries, grocery]
        });
    }

    deleteGrocery = groceryId => {
        const newGroceries = this.state.groceries.filter(grocery =>
            grocery.id !== groceryId
        );
        this.setState({ groceries: newGroceries });
    }

    render() {
        const contextValues = {
            groceries: this.state.groceries,
            setError: this.setError,
            clearError: this.clearError,
            addGrocery: this.addGrocery,
            deleteGrocery: this.deleteGrocery,
            error: this.state.error,
            setGroceries: this.setGroceries,
        }

        return (
            <GroceryContext.Provider value={contextValues}>
                {this.props.children}
            </GroceryContext.Provider>
        );
    }
}