import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GroceryItem from './GroceryItem/GroceryItem';
import GroceryContext from '../../contexts/GroceryContext';
import GroceryApiService from '../../services/grocery-api-service';
import './Grocery.css';

class Grocery extends Component {
    static contextType = GroceryContext;

    componentDidMount() {
        this.context.clearError();
        GroceryApiService.getGroceries()
            .then(groceries => {

                this.context.setGroceries(groceries)
                //console.log('groceries owned ', this.context.groceries)
            })
            .catch(error => this.context.setError(error));
    }

    render() {
        //console.log('groceries owned ', this.context.groceries)
        const items = this.context.groceries.map((item, i) =>
            <GroceryItem item={item} key={i} />
        )
        return (
            <div className="Grocery">
                <h2>Grocery</h2>
                {items}
                <Link to="/add-grocery">
                    <button type="button">
                        Add Grocery
                    </button>
                </Link>
            </div>
        );
    }
}

export default Grocery;