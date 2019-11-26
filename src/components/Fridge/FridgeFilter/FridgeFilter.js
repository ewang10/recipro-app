import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FridgeItem from '../FridgeItem/FridgeItem';
import FridgeContext from '../../../contexts/FridgeContext';
import './FridgeFilter.css';

class FridgeFilter extends Component {
    static contextType = FridgeContext;
    noFilter() {
        const items = this.context.items
            .map((item, i) => (
                <FridgeItem 
                    item={item}
                    key={i}
                />
            ))
        return items;
    }
    
    itemFilter() {
        const items = this.context.items
            .filter(item => item.categoryid === this.context.category.id)
            .map((item, i) => (
                <FridgeItem 
                    item={item}
                    key={i}
                />
            ))
        return items;
    }

    render() {
        const items = this.context.category
            ? this.itemFilter()
            : this.noFilter();
        return (
            <div className="FridgeFilter">
                {items}
                <Link to="/fridge/add-fridge-item">
                    <button type="button">
                        + Item
                    </button>
                </Link>
            </div>
        );
    }
}

FridgeFilter.defaultProps = {
    categories: [],
    items: []
}

export default FridgeFilter;