import React, { Component } from 'react';
import './GroceryItem.css';

class GroceryItem extends Component {
    render() {
        return (
            <div className="GroceryItem">
                <h4>{this.props.item.name}</h4>
                <button type="button">Delete</button>
            </div>
        );
    }
}

export default GroceryItem;