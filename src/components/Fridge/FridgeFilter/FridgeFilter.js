import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FridgeItem from '../FridgeItem/FridgeItem';
import './FridgeFilter.css';

class FridgeFilter extends Component {
    noFilter() {
        const items = this.props.items
            .map((item, i) => (
                <FridgeItem 
                    item={item}
                    key={i}
                />
            ))
        return items;
    }
    
    itemFilter() {
        const items = this.props.items
            .filter(item => item.category_id === this.props.category.id)
            .map((item, i) => (
                <FridgeItem 
                    item={item}
                    key={i}
                />
            ))
        return items;
    }

    render() {
        let items;
        if (!this.props.items) {
            //console.log('no items')
            items = [];
        } else if (this.props.category) {
            //console.log(this.props.category)
            //console.log('yes category')
            items = this.itemFilter();
        } else {
            //console.log('no category')
            items = this.noFilter();
        }
        
        return (
            <div className="FridgeFilter">
                {items}
                <Link to="/add-fridge-item">
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