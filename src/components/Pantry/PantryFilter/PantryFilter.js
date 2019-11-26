import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PantryItem from '../PantryItem/PantryItem';
import PantryContext from '../../../contexts/PantryContext';
import './PantryFilter.css';

class PantryFilter extends Component {
    static contextType = PantryContext;

    noFilter() {
        const items = this.context.items
            .map((item, i) => (
                <PantryItem
                    item={item}
                    key={i}
                    history={this.props.history}
                />
            ))
        return items;
    }

    itemFilter() {
        const items = this.context.items
            .filter(item => item.categoryid === this.context.category.id)
            .map((item, i) => (
                <PantryItem
                    item={item}
                    key={i}
                    history={this.props.history}
                />
            ))
        return items;
    }

    render() {

        const items = this.context.category
            ? this.itemFilter()
            : this.noFilter();

        return (
            <div className="PantryFilter">
                {items}
                <Link to="/pantry/add-pantry-item">
                    <button type="button">
                        + Item
                    </button>
                </Link>
            </div>
        );
    }
}

PantryFilter.defaultProps = {
    categories: [],
    items: []
}

export default PantryFilter;