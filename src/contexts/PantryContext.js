import React, { Component } from 'react';

const PantryContext = React.createContext({
    categories: [],
    items: [],
    updateCategory: () => { },
    addCategory: () => { },
    updateItem: () => { },
    deleteItem: () => { },
    addItem: () => { },
    category: '',
    item: '',
    setCategories: () => {},
    setItems: () => {},
    error: null,
    setError: () => {},
    clearError: () => {}
});

export default PantryContext;

export class PantryProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            items: [],
            selectedCategory: '',
            selectedItem: ''
        }
    }

    setError = error => {
        console.log(error);
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    setCategories = categories => {
        this.setState({ categories });
    }

    setItems = items => {
        this.setState({ items });
    }

    updateSelectedCategory = category => {
        this.setState({ selectedCategory: category });
    }

    updateSelectedItem = item => {
        this.setState({ selectedItem: item });
    }

    addCategory = category => {
        this.setState({
            categories: [...this.state.categories, category]
        });
    }

    addItem = item => {
        this.setState({
            items: [...this.state.items, item]
        });
    }

    deleteItem = itemId => {
        const newItems = this.state.items.filter(item =>
            item.id !== itemId
        );
        this.setState({items: newItems});
    }

    render() {
        const contextValue = {
            categories: this.state.categories,
            items: this.state.items,
            updateCategory: this.updateSelectedCategory,
            addCategory: this.addCategory,
            category: this.state.selectedCategory,
            updateItem: this.updateSelectedItem,
            addItem: this.addItem,
            deleteItem: this.deleteItem,
            item: this.state.selectedItem,
            setCategories: this.setCategories,
            setItems: this.setItems,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError
        }

        return (
            <PantryContext.Provider value={contextValue}>
                {this.props.children}
            </PantryContext.Provider>
        );
    }
}