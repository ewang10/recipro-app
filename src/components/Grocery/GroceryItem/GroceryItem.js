import React, { Component } from 'react';
import GroceryContext from '../../../contexts/GroceryContext';
import GroceryApiService from '../../../services/grocery-api-service';
import './GroceryItem.css';

class GroceryItem extends Component {
    static contextType = GroceryContext;
    deleteGrocery(itemId, cb) {
        this.context.clearError();

        GroceryApiService.deleteGrocery(itemId)
            .then(() => {
                cb(itemId);
                //this.props.history.push('/grocery');
            })
            .catch(error => this.context.setError(error));
    }
    render() {
        return (
            <div className="GroceryItem">
                <h4>{this.props.item.name}</h4>
                <button
                    type="button"
                    onClick={() => this.deleteGrocery(
                        this.props.item.id,
                        this.context.deleteGrocery
                    )}
                >
                    Delete
                </button>
            </div>
        );
    }
}

GroceryItem.defaultProps = {
    item: {}
}

export default GroceryItem;